import { artisans } from "@/data/artisans";
import ArtisanDetail from "@/components/ArtisanDetail";

export function generateStaticParams() {
  return artisans.map((a) => ({ slug: a.slug }));
}

export default function ArtisanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ArtisanDetail params={params} />;
}
