import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FabricMeshWrapper from "@/components/FabricMeshWrapper";

export const metadata: Metadata = {
  title: {
    default: "The Pashm Project | Artisan Pashmina from Basohli",
    template: "%s | The Pashm Project",
  },
  description:
    "Handcrafted Pashmina shawls from the artisan weavers of Basohli, Jammu & Kashmir. Every shawl carries the story of the hands that made it.",
  keywords: [
    "Pashmina",
    "Basohli",
    "handloom",
    "artisan",
    "Kashmir",
    "shawl",
    "slow fashion",
    "heritage craft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <FabricMeshWrapper />
        <Navigation />
        <main className="flex-1 pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
