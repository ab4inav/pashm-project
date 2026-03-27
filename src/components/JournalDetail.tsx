"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { journalEntries } from "@/data/journal";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const typeLabels: Record<string, string> = {
  story: "Story",
  "photo-essay": "Photo Essay",
  short: "Short Note",
};

export default function JournalDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = journalEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="page-content">
      <article className="py-12 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <Link
              href="/journal"
              className="text-xs tracking-[0.3em] uppercase text-warm-stone hover:text-saffron transition-colors"
            >
              &larr; Journal
            </Link>
          </motion.div>

          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.2em] uppercase text-saffron">
                {typeLabels[entry.type]}
              </span>
              <span className="text-xs text-warm-stone/50">&middot;</span>
              <span className="text-xs text-warm-stone">{entry.readTime}</span>
            </div>

            <h1
              className="text-4xl md:text-5xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              {entry.title}
            </h1>

            <p className="text-sm text-warm-stone">{formatDate(entry.date)}</p>
          </motion.header>

          <motion.div
            className="placeholder-image aspect-[16/9] mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />

          <motion.div
            className="space-y-6 text-charcoal/80 leading-relaxed text-[17px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {entry.content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="woven-divider mt-16 mb-12" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link
              href="/journal"
              className="text-sm text-saffron hover:text-saffron-dark transition-colors"
            >
              &larr; More from the Journal
            </Link>
            <Link
              href="/shop"
              className="text-sm text-warm-stone hover:text-saffron transition-colors"
            >
              Explore the Collection &rarr;
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
