export interface ProjectLogoInfo {
  src: string;
  alt: string;
  isWide?: boolean;
}

export function getProjectLogo(item: {
  logoPath?: string | null;
  logoAlt?: string | null;
  client?: string;
  location?: string;
  county?: string;
  title?: string;
}): ProjectLogoInfo | null {
  // If exact logoPath is specified on the item and starts with /logos/counties or /logos/municipalities
  if (item.logoPath && (item.logoPath.includes('/counties/') || item.logoPath.includes('/municipalities/'))) {
    return {
      src: item.logoPath,
      alt: item.logoAlt || "Stema",
      isWide: false,
    };
  }

  const locationLower = (item.location || "").toLowerCase();
  const countyLower = (item.county || "").toLowerCase();
  const titleLower = (item.title || "").toLowerCase();
  const clientLower = (item.client || "").toLowerCase();
  const combined = `${locationLower} ${countyLower} ${titleLower} ${clientLower}`;

  // 1. Municipal Crests
  if (combined.includes("timișoara") || combined.includes("timisoara")) {
    return { src: "/logos/municipalities/timisoara.svg", alt: "Stema Municipiului Timișoara", isWide: false };
  }
  if (combined.includes("brașov") || combined.includes("brasov")) {
    return { src: "/logos/municipalities/brasov.svg", alt: "Stema Municipiului Brașov", isWide: false };
  }
  if (combined.includes("ploiești") || combined.includes("ploiesti")) {
    return { src: "/logos/municipalities/ploiesti.png", alt: "Stema Municipiului Ploiești", isWide: false };
  }
  if (combined.includes("arad")) {
    return { src: "/logos/municipalities/arad.svg", alt: "Stema Municipiului Arad", isWide: false };
  }
  if (combined.includes("oradea")) {
    return { src: "/logos/municipalities/oradea.svg", alt: "Stema Municipiului Oradea", isWide: false };
  }
  if (combined.includes("iași") || combined.includes("iasi")) {
    return { src: "/logos/municipalities/iasi.svg", alt: "Stema Municipiului Iași", isWide: false };
  }
  if (combined.includes("bistrița") || combined.includes("bistrita")) {
    return { src: "/logos/municipalities/bistrita.svg", alt: "Stema Municipiului Bistrița", isWide: false };
  }
  if (combined.includes("moreni")) {
    return { src: "/logos/municipalities/moreni.png", alt: "Stema Municipiului Moreni", isWide: false };
  }

  // 2. County Coats of Arms
  if (combined.includes("olt")) return { src: "/logos/counties/stema_olt.svg", alt: "Stema Județului Olt" };
  if (combined.includes("vâlcea") || combined.includes("valcea")) return { src: "/logos/counties/stema_valcea.svg", alt: "Stema Județului Vâlcea" };
  if (combined.includes("dolj")) return { src: "/logos/counties/stema_dolj.svg", alt: "Stema Județului Dolj" };
  if (combined.includes("bistrița") || combined.includes("bistrita")) return { src: "/logos/counties/stema_bistrita_nasaud.svg", alt: "Stema Județului Bistrița-Năsăud" };
  if (combined.includes("dâmbovița") || combined.includes("dambovita")) return { src: "/logos/counties/stema_dambovita.svg", alt: "Stema Județului Dâmbovița" };
  if (combined.includes("brăila") || combined.includes("braila")) return { src: "/logos/counties/stema_braila.svg", alt: "Stema Județului Brăila" };
  if (combined.includes("cluj")) return { src: "/logos/counties/stema_cluj.png", alt: "Stema Județului Cluj" };
  if (combined.includes("bihor")) return { src: "/logos/counties/stema_bihor.png", alt: "Stema Județului Bihor" };
  if (combined.includes("timiș") || combined.includes("timis")) return { src: "/logos/counties/stema_timis.svg", alt: "Stema Județului Timiș" };
  if (combined.includes("prahova")) return { src: "/logos/counties/stema_prahova.svg", alt: "Stema Județului Prahova" };
  if (combined.includes("argeș") || combined.includes("arges")) return { src: "/logos/counties/stema_arges.png", alt: "Stema Județului Argeș" };
  if (combined.includes("suceava")) return { src: "/logos/counties/stema_suceava.png", alt: "Stema Județului Suceava" };
  if (combined.includes("galați") || combined.includes("galati")) return { src: "/logos/counties/stema_galati.svg", alt: "Stema Județului Galați" };
  if (combined.includes("vrancea")) return { src: "/logos/counties/stema_vrancea.svg", alt: "Stema Județului Vrancea" };
  if (combined.includes("ialomița") || combined.includes("ialomita")) return { src: "/logos/counties/stema_ialomita.svg", alt: "Stema Județului Ialomița" };
  if (combined.includes("alba")) return { src: "/logos/counties/stema_alba.svg", alt: "Stema Județului Alba" };
  if (combined.includes("tulcea")) return { src: "/logos/counties/stema_tulcea.svg", alt: "Stema Județului Tulcea" };
  if (combined.includes("hunedoara")) return { src: "/logos/counties/stema_hunedoara.png", alt: "Stema Județului Hunedoara" };
  if (combined.includes("constanța") || combined.includes("constanta")) return { src: "/logos/counties/stema_constanta.png", alt: "Stema Județului Constanța" };
  if (combined.includes("ilfov")) return { src: "/logos/counties/stema_ilfov.svg", alt: "Stema Județului Ilfov" };

  return null;
}
