"use client";

import Link from "next/link";
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

export default function JournalPage() {
  return (
    <div className="page-content">
      {/* Hero */}
      <section className="py-24 lg:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-xs tracking-[0.4em] uppercase text-saffron mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Journal
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Letters from
            <br />
            <span className="text-saffron">the mountains</span>
          </motion.h1>
          <motion.p
            className="text-lg text-warm-stone max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Stories, reflections, and glimpses into the world of Basohli&apos;s
            Pashmina craft. Written slowly, like the shawls themselves.
          </motion.p>
        </div>
      </section>

      {/* Entries */}
      <section className="py-8 lg:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {journalEntries.map((entry, i) => (
              <motion.article
                key={entry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Link
                  href={`/journal/${entry.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-4">
                    <div className="placeholder-image aspect-[4/3] group-hover:shadow-lg transition-shadow duration-500" />
                  </div>
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-[0.2em] uppercase text-saffron">
                        {typeLabels[entry.type]}
                      </span>
                      <span className="text-xs text-warm-stone/50">&middot;</span>
                      <span className="text-xs text-warm-stone">
                        {entry.readTime}
                      </span>
                    </div>
                    <h2
                      className="text-2xl md:text-3xl mb-3 group-hover:text-saffron transition-colors duration-300"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                    >
                      {entry.title}
                    </h2>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      {entry.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-warm-stone">
                        {formatDate(entry.date)}
                      </span>
                      <span className="text-sm text-saffron/70 group-hover:text-saffron transition-colors">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
                {i < journalEntries.length - 1 && (
                  <div className="woven-divider mt-16" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
