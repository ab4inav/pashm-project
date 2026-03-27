"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { artisans } from "@/data/artisans";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function ArtisansPage() {
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
            The Artisans
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The hands that
            <br />
            <span className="text-saffron">hold the tradition</span>
          </motion.h1>
          <motion.p
            className="text-lg text-warm-stone max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Behind every shawl is a person — with a name, a story, and decades
            of knowledge carried in their fingertips. These are the weavers and
            embroidery artists of Basohli.
          </motion.p>
        </div>
      </section>

      {/* Artisan grid */}
      <section className="py-8 lg:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {artisans.map((artisan, i) => (
              <motion.div
                key={artisan.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Link
                  href={`/artisans/${artisan.slug}`}
                  className="group block"
                >
                  <div className="placeholder-image aspect-[3/4] mb-6 group-hover:shadow-lg transition-shadow duration-500" />
                  <h3
                    className="text-2xl mb-1 group-hover:text-saffron transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {artisan.name}
                  </h3>
                  <p className="text-sm text-saffron tracking-wide mb-3">
                    {artisan.title}
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                    {artisan.bio.slice(0, 150)}...
                  </p>
                  <p
                    className="text-sm italic text-deep-earth/60"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    &ldquo;{artisan.quote.slice(0, 80)}...&rdquo;
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective statement */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="woven-divider max-w-xs mx-auto mb-12" />
            <h2
              className="text-3xl md:text-4xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Our collective is small — three artisans, for now. That is
              intentional.
            </h2>
            <p className="text-warm-stone text-lg leading-relaxed">
              We grow only as fast as the craft allows. Each new artisan joins
              because the work calls to them, not because we need to scale. This
              is slow fashion in the truest sense — not a marketing label, but a
              way of working.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
