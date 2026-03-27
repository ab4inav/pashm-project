"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredArtisan = artisans[0];

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center relative px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-xs tracking-[0.4em] uppercase text-warm-stone mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From the looms of Basohli
          </motion.p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Every thread
            <br />
            <span className="text-saffron">carries a name</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-warm-stone max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Handcrafted Pashmina from the artisan weavers of Basohli — where
            a nearly lost textile heritage is being revived, one shawl at a time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-saffron text-ivory text-sm tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-saffron/20"
            >
              Explore the Collection
            </Link>
            <Link
              href="/our-story"
              className="inline-block px-8 py-4 border border-deep-earth/20 text-deep-earth text-sm tracking-wide hover:border-saffron hover:text-saffron transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-warm-stone to-transparent"
          />
        </motion.div>
      </section>

      {/* Heritage statement */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-6">
              The Heritage
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Basohli was once a town where every third household had a loom.
              The click-clack of the shuttle was the town&apos;s heartbeat.
            </h2>
            <p className="text-warm-stone text-lg max-w-2xl mx-auto leading-relaxed">
              Most looms have fallen silent. The young left for cities. Machine-made
              shawls undercut the handloom weavers. But a few hands never stopped.
              The Pashm Project exists to ensure they never have to.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* Featured collection */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-4">
              The Collection
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Selected Pieces
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.slug} variants={fadeUp}>
                <Link href={`/shop/${product.slug}`} className="group block">
                  <div className="placeholder-image aspect-[3/4] mb-6 group-hover:shadow-lg transition-shadow duration-500" />
                  <h3
                    className="text-xl mb-1 group-hover:text-saffron transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-warm-stone mb-2">
                    by {product.artisanName}
                  </p>
                  <p className="text-sm text-deep-earth">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            {...fadeUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <Link
              href="/shop"
              className="inline-block text-sm tracking-wide text-saffron border-b border-saffron/30 pb-1 hover:border-saffron transition-colors duration-300"
            >
              View all pieces
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* Artisan spotlight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            {...fadeUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="placeholder-image aspect-square lg:aspect-[4/5]" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-6">
                Artisan Spotlight
              </p>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                {featuredArtisan.name}
              </h2>
              <p className="text-sm tracking-wide text-warm-stone mb-4">
                {featuredArtisan.title} &middot;{" "}
                {featuredArtisan.yearsOfExperience} years of experience
              </p>
              <p className="artisan-quote mb-8">{featuredArtisan.quote}</p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                {featuredArtisan.bio}
              </p>
              <Link
                href={`/artisans/${featuredArtisan.slug}`}
                className="inline-block text-sm tracking-wide text-saffron border-b border-saffron/30 pb-1 hover:border-saffron transition-colors duration-300"
              >
                Read the full story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* Process teaser */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-6">
              The Process
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              From a mountainside in Ladakh
              <br />
              to your hands
            </h2>
            <p className="text-warm-stone text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              A Pashmina shawl begins not on a loom, but on a mountainside at
              14,000 feet — where the Changthangi goat grows an undercoat finer
              than anything human hands can manufacture.
            </p>
            <Link
              href="/the-process"
              className="inline-block px-8 py-4 border border-deep-earth/20 text-deep-earth text-sm tracking-wide hover:border-saffron hover:text-saffron transition-all duration-300"
            >
              Follow the Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter / closing */}
      <section className="py-24 lg:py-32 px-6 bg-deep-earth/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Stay close to the craft
            </h2>
            <p className="text-warm-stone mb-8 leading-relaxed">
              Stories from Basohli, new pieces from our artisans, and the quiet
              rhythms of a craft that refuses to disappear. No noise, no spam —
              just letters from the mountains.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent border border-deep-earth/20 text-sm text-charcoal placeholder:text-warm-stone/50 focus:outline-none focus:border-saffron transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-saffron text-ivory text-sm tracking-wide hover:bg-saffron-dark transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-warm-stone/50 mt-4">
              We write once a month. Sometimes less. Never more.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
