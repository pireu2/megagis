"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface AnimatedTopoBackgroundProps {
  /** Color of contour lines (hex with optional alpha) */
  lineColor?: string;
  /** Number of contour levels/bands */
  levels?: number;
  /** Speed of animation */
  animationSpeed?: number;
  /** Edge thickness (lower = thinner lines) */
  edgeThreshold?: number;
  /** CSS opacity value */
  opacity?: number;
}

export function AnimatedTopoBackground({
  lineColor = "#60a5faCC",
  levels = 12,
  animationSpeed = 0.012,
  edgeThreshold = 0.005,
  opacity = 0.3,
}: AnimatedTopoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Parse color
    const colorHex = lineColor.slice(0, 7); // Remove alpha if present
    const color = new THREE.Color(colorHex);

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.OrthographicCamera(0, width, 0, height, 1, 2);
    camera.position.z = 2;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setClearColor(0, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Setup clock
    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Simplex noise shader (from Ashima Arts)
    const simplexNoise = `
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) { 
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i); 
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
    `;

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment shader
    const fragmentShader = `
      uniform vec3 color;
      uniform float time;
      uniform float levels;
      uniform float edgeThreshold;

      ${simplexNoise}

      void main() {
        vec2 pos = gl_FragCoord.xy;
        
        // Multi-octave noise for more realistic terrain
        // Layer 1: Large terrain features
        float noise1 = snoise(vec3(pos * 0.0008, time * 0.3));
        
        // Layer 2: Medium details with different frequency
        float noise2 = snoise(vec3(pos * 0.002, time * 0.5 + 100.0)) * 0.5;
        
        // Layer 3: Fine details
        float noise3 = snoise(vec3(pos * 0.004, time * 0.7 + 200.0)) * 0.25;
        
        // Combine layers with different weights for natural terrain
        float noise = noise1 + noise2 + noise3;
        noise = (noise + 1.0) / 2.0; // Normalize to 0-1

        // Posterize to create bands
        float lower = floor(noise * levels) / levels;
        float lowerDiff = noise - lower;

        // Draw only edges between bands
        if (lowerDiff > edgeThreshold)
          discard;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create geometry
    const geometry = new THREE.PlaneGeometry(width, height);
    geometry.translate(width / 2, height / 2, 0);

    // Create material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: color },
        time: { value: 0 },
        levels: { value: levels },
        edgeThreshold: { value: edgeThreshold },
      },
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      transparent: true,
    });
    materialRef.current = material;

    // Create mesh and add to scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add canvas to container
    container.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      if (
        materialRef.current &&
        clockRef.current &&
        rendererRef.current &&
        sceneRef.current &&
        cameraRef.current
      ) {
        materialRef.current.uniforms.time.value =
          clockRef.current.startTime +
          clockRef.current.getElapsedTime() * animationSpeed;
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;

      const rect = container.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;

      cameraRef.current.right = newWidth;
      cameraRef.current.top = newHeight;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, [animationSpeed, edgeThreshold, levels, lineColor]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    />
  );
}
