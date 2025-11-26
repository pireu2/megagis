import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Megagis",
  description: "Servicii profesionale de cadastru, topografie și GIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
