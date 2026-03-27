"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { artisans } from "@/data/artisans";
import { products } from "@/data/products";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ArtisanDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const artisan = artisans.find((a) => a.slug === slug);

  if (!artisan) {
    notFound();
  }

  const artisanProducts = products.filter((p) => p.artisanSlug === artisan.slug);

  return (
    <div className="page-content">
      <section className="py-24 lg:py-36 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="placeholder-image aspect-[3/4]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link
              href="/artisans"
              className="text-xs tracking-[0.3em] uppercase text-warm-stone hover:text-saffron transition-colors mb-8 inline-block"
            >
              &larr; All Artisans
            </Link>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-4"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              {artisan.name}
            </h1>

            <p className="text-saffron tracking-wide mb-6">{artisan.title}</p>

            <div className="flex gap-8 mb-8 text-sm text-warm-stone">
              <div>
                <span className="block text-2xl text-deep-earth" style={{ fontFamily: "var(--font-serif)" }}>
                  {artisan.yearsOfExperience}
                </span>
                years of craft
              </div>
              <div>
                <span className="block text-2xl text-deep-earth" style={{ fontFamily: "var(--font-serif)" }}>
                  {artisan.specialty.split(" & ").length}
                </span>
                specialties
              </div>
            </div>

            <p className="artisan-quote mb-8">
              &ldquo;{artisan.quote}&rdquo;
            </p>

            <p className="text-sm text-warm-stone">
              {artisan.specialty} &middot; {artisan.location}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              The Story
            </h2>
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              {artisan.story.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {artisanProducts.length > 0 && (
        <>
          <div className="woven-divider max-w-xs mx-auto" />
          <section className="py-16 lg:py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp}>
                <h2
                  className="text-3xl mb-12 text-center"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                >
                  Pieces by {artisan.name.split(" ")[0]}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {artisanProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/shop/${product.slug}`}
                      className="group block"
                    >
                      <div className="placeholder-image aspect-[3/4] mb-4 group-hover:shadow-lg transition-shadow duration-500" />
                      <h3
                        className="text-lg mb-1 group-hover:text-saffron transition-colors duration-300"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-deep-earth">
                        {formatPrice(product.price)}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
