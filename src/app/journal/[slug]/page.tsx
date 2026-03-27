import { journalEntries } from "@/data/journal";
import JournalDetail from "@/components/JournalDetail";

export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export default function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <JournalDetail params={params} />;
}
