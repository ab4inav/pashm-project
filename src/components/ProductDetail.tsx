"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const artisan = artisans.find((a) => a.slug === product.artisanSlug);
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the "${product.name}" Pashmina shawl (${formatPrice(product.price)}). Could you share more details?`
  );

  return (
    <div className="page-content">
      <section className="py-12 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/shop"
              className="text-xs tracking-[0.3em] uppercase text-warm-stone hover:text-saffron transition-colors"
            >
              &larr; Back to Collection
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="placeholder-image aspect-[3/4] mb-4" />
              <div className="grid grid-cols-3 gap-4">
                <div className="placeholder-image aspect-square" />
                <div className="placeholder-image aspect-square" />
                <div className="placeholder-image aspect-square" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl mb-4"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                {product.name}
              </h1>

              <p className="text-2xl text-deep-earth mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                {formatPrice(product.price)}
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-8">
                {product.description}
              </p>

              {artisan && (
                <Link
                  href={`/artisans/${artisan.slug}`}
                  className="flex items-center gap-4 p-4 bg-deep-earth/5 hover:bg-deep-earth/8 transition-colors mb-8 group"
                >
                  <div className="placeholder-image w-14 h-14 rounded-full shrink-0" />
                  <div>
                    <p className="text-sm text-warm-stone">Crafted by</p>
                    <p
                      className="text-lg text-deep-earth group-hover:text-saffron transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {artisan.name}
                    </p>
                    <p className="text-xs text-warm-stone">{artisan.title}</p>
                  </div>
                </Link>
              )}

              <div className="mb-8">
                <a
                  href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn flex items-center justify-center gap-3 w-full py-4 text-sm tracking-wide"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Request This Piece
                </a>
                <Link
                  href="/contact"
                  className="block text-center mt-3 text-sm text-warm-stone hover:text-saffron transition-colors"
                >
                  or send an inquiry
                </Link>
              </div>

              <div className="woven-divider mb-8" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">Material</h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{product.material}</p>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">Dimensions</h3>
                  <p className="text-sm text-charcoal/80">{product.dimensions} &middot; {product.weight}</p>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">Care</h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed">{product.care}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="woven-divider max-w-xs mx-auto my-16 lg:my-24" />

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              The Story Behind This Piece
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              {product.story.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
