"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function OurStoryPage() {
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
            Our Story
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A town forgot its song.
            <br />
            <span className="text-saffron">We came to listen.</span>
          </motion.h1>
        </div>
      </section>

      {/* The place */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp}>
            <div className="placeholder-image aspect-[4/5]" />
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-4">
              The Place
            </p>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Basohli
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Basohli sits where the Shivalik hills begin their climb toward the
                Pir Panjal range, in Kathua district of Jammu &amp; Kashmir. A town
                of 8,000 people that most maps barely acknowledge.
              </p>
              <p>
                But in the world of Indian art, Basohli is a name that resonates.
                In the 17th and 18th centuries, this small town produced a school
                of miniature painting — the Basohli school — considered among the
                most vibrant and expressive in Indian art history. Bold colors,
                fine detail, a reverence for natural beauty.
              </p>
              <p>
                What is less known is that Basohli also had a thriving textile
                tradition. The same artistic sensibility that produced those
                paintings expressed itself in weaving. Pashmina shawls from
                Basohli carried a character distinct from those of the Kashmir
                Valley — patterns influenced by the Pahari aesthetic, techniques
                adapted to the local environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* The loss */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-4">
              What Was Lost
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              The silence of the looms
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                This tradition nearly died. Decades of neglect, competition from
                machine-made textiles, and the migration of young people to cities
                left only a handful of weavers still working in Basohli.
              </p>
              <p>
                When we first visited, we found Master Ghulam Mohammad weaving
                alone in his home — the last full-time handloom weaver in a town
                that once had dozens. His loom, over a hundred years old, was still
                clicking. His hands, at sixty-eight, were still steady. But the
                house was quiet in a way that no craftsman&apos;s workshop should be.
              </p>
              <p className="artisan-quote">
                &ldquo;There was a time when you could hear the looms from the road.
                Now you have to come inside to know that anyone is still
                weaving.&rdquo;
              </p>
              <p>
                The craft hadn&apos;t disappeared because it was inferior. It
                disappeared because no one was paying attention. Machine-made
                &ldquo;Pashmina&rdquo; — often not Pashmina at all — flooded the
                market at a tenth of the price. Buyers couldn&apos;t tell the
                difference. Weavers couldn&apos;t compete. One by one, they put
                down the shuttle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* The revival */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-4">
              The Revival
            </p>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Why we started
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                The Pashm Project began with a simple conviction: that Basohli&apos;s
                textile heritage is worth reviving. Not as a museum piece, but as
                a living craft — producing shawls that people wear, cherish, and
                pass down.
              </p>
              <p>
                We work directly with the weavers and embroidery artists of
                Basohli. No middlemen. No factory floors. Every shawl is made in
                the artisan&apos;s own home, on their own loom, at their own pace.
              </p>
              <p>
                We don&apos;t just sell shawls. We tell you who made them, how they
                were made, and why they matter. Because a Pashmina without its
                story is just fabric. With its story, it&apos;s an inheritance.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <div className="placeholder-image aspect-[4/5]" />
          </motion.div>
        </div>
      </section>

      <div className="woven-divider max-w-xs mx-auto" />

      {/* What makes us different */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase text-saffron mb-4">
              What Makes Us Different
            </p>
            <h2
              className="text-3xl md:text-4xl mb-12"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Most Pashmina brands sell the product.
              <br />
              We sell the origin, the person, and the process.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            {...fadeUp}
          >
            <div className="p-6">
              <h3
                className="text-xl mb-3 text-deep-earth"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Origin-Specific
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Not &ldquo;from Kashmir.&rdquo; From Basohli — a specific town,
                with specific traditions, specific people. We don&apos;t blur the
                origin. We name it.
              </p>
            </div>
            <div className="p-6">
              <h3
                className="text-xl mb-3 text-deep-earth"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Artisan-First
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Every shawl carries the name and story of the person who made it.
                The human behind the craft is as visible as the craft itself.
              </p>
            </div>
            <div className="p-6">
              <h3
                className="text-xl mb-3 text-deep-earth"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Slow by Design
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We don&apos;t scale. We don&apos;t rush. A shawl takes as long as
                it takes. Our weavers work in natural light, at their own pace,
                without deadlines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-deep-earth/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Meet the hands behind the craft
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/artisans"
                className="inline-block px-8 py-4 bg-saffron text-ivory text-sm tracking-wide hover:bg-saffron-dark transition-all duration-300"
              >
                Our Artisans
              </Link>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 border border-deep-earth/20 text-deep-earth text-sm tracking-wide hover:border-saffron hover:text-saffron transition-all duration-300"
              >
                The Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
