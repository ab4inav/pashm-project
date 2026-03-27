"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ShopPage() {
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
            The Collection
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Each piece,
            <br />
            <span className="text-saffron">one of its kind</span>
          </motion.h1>
          <motion.p
            className="text-lg text-warm-stone max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Every shawl in our collection is handcrafted by a specific artisan
            in Basohli. No two are alike. When a piece finds its home, it is
            gone — and another will be woven in its own time.
          </motion.p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-8 lg:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="group block"
                >
                  <div className="placeholder-image aspect-[3/4] mb-6 group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-1" />
                  <h3
                    className="text-xl mb-1 group-hover:text-saffron transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-warm-stone mb-2">
                    by{" "}
                    <span className="hover:text-saffron transition-colors">
                      {product.artisanName}
                    </span>
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-sm text-deep-earth font-medium">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="woven-divider max-w-xs mx-auto mb-12" />
          <p
            className="text-xl text-deep-earth/60 italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Each shawl passes the ring test — it can be drawn through a
            wedding ring. This is not a trick. It is a testament to the
            fineness of the fiber and the skill of the weaver.
          </p>
        </div>
      </section>
    </div>
  );
}
