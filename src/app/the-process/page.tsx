"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const steps = [
  {
    number: "01",
    title: "The Fiber",
    subtitle: "Changthang Plateau, Ladakh — 14,000 ft",
    description:
      "At altitudes where few humans can live year-round, the Changthangi goat grows an undercoat of extraordinary fineness — each fiber measuring just 12-16 microns in diameter, six times finer than a human hair. Every spring, as temperatures rise, herders gently comb this undercoat from the goats. A single animal yields only 150-200 grams of raw Pashmina per year.",
  },
  {
    number: "02",
    title: "The Cleaning",
    subtitle: "Basohli, Jammu & Kashmir",
    description:
      "The raw fiber arrives as a tangled, oily mass. It must be cleaned by hand — washed in cold water, sorted by fineness, and freed of any coarse guard hairs. This is painstaking work, done entirely by feel. The sorters' fingertips can detect differences in fiber diameter that no machine can measure.",
  },
  {
    number: "03",
    title: "The Spinning",
    subtitle: "Hand-spun on a traditional charkha",
    description:
      "The cleaned fiber is spun into yarn on a hand-operated spinning wheel — the charkha. This is not mechanized spinning; every twist of the yarn is controlled by the spinner's hand. A skilled spinner produces 10-15 grams of yarn per day. The resulting thread is so fine it can barely be seen against a light background.",
  },
  {
    number: "04",
    title: "The Weaving",
    subtitle: "On a century-old pit loom",
    description:
      "The yarn is set on a pit loom — a wooden frame set into the ground, operated entirely by hand and foot. No motors, no automation. The weaver controls every thread, every pass of the shuttle. A plain Pashmina shawl takes two to three weeks of continuous weaving. The weaver works only in natural light, from dawn to dusk.",
  },
  {
    number: "05",
    title: "The Embroidery",
    subtitle: "Sozni needlework — when the shawl calls for it",
    description:
      "If the shawl is to be embroidered, it passes to the hands of a Sozni artist. Using a single needle and pure silk thread, the embroiderer creates intricate patterns — stitch by tiny stitch, freehand, without any tracing or template. This stage alone can add three to six months to the making of a shawl.",
  },
  {
    number: "06",
    title: "The Finishing",
    subtitle: "Washed, pressed, and blessed",
    description:
      "The finished shawl is carefully washed, pressed, and inspected. Every inch is checked for consistency — the weave, the embroidery, the drape. Only then does it leave the artisan's hands. By the time a Pashmina shawl reaches you, it carries within it months of labor and centuries of knowledge. It is not a product. It is an inheritance.",
  },
];

export default function TheProcessPage() {
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
            The Process
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From mountainside
            <br />
            <span className="text-saffron">to your hands</span>
          </motion.h1>
          <motion.p
            className="text-lg text-warm-stone max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The journey of a Pashmina shawl takes months and passes through
            many hands. Each step is done by hand, at the pace the craft
            demands. There are no shortcuts.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 lg:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24 last:mb-0"
              {...fadeUp}
            >
              {/* Image - alternating sides */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="placeholder-image aspect-[4/3] lg:aspect-square" />
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-7 flex flex-col justify-center ${
                  i % 2 === 0 ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                }`}
              >
                <span
                  className="text-6xl lg:text-7xl text-ivory-dark mb-4"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                >
                  {step.number}
                </span>
                <h2
                  className="text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  {step.title}
                </h2>
                <p className="text-sm text-saffron tracking-wide mb-4">
                  {step.subtitle}
                </p>
                <p className="text-charcoal/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Divider between steps */}
              {i < steps.length - 1 && (
                <div className="lg:col-span-12 flex justify-center py-4">
                  <div className="w-px h-16 bg-gradient-to-b from-warm-stone/30 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Time statement */}
      <section className="py-24 lg:py-32 px-6 bg-deep-earth/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              A single shawl. Three to nine months. Many hands. One tradition.
            </h2>
            <p className="text-warm-stone text-lg leading-relaxed mb-10">
              We mention this not to romanticize slow production, but to explain
              why we cannot rush. Each shawl made in good light, by steady hands,
              is a shawl made with clear eyes.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-saffron text-ivory text-sm tracking-wide hover:bg-saffron-dark transition-all duration-300"
            >
              See the Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
