"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function ContactPage() {
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
            Get in Touch
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We&apos;d love to
            <br />
            <span className="text-saffron">hear from you</span>
          </motion.h1>
          <motion.p
            className="text-lg text-warm-stone max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Whether you have a question about a specific shawl, want to learn
            more about our artisans, or simply want to say hello — we&apos;re
            here.
          </motion.p>
        </div>
      </section>

      <section className="py-8 lg:py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact form */}
          <motion.div {...fadeUp}>
            <h2
              className="text-2xl mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Send an Inquiry
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-transparent border border-deep-earth/15 text-sm text-charcoal placeholder:text-warm-stone/40 focus:outline-none focus:border-saffron transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-transparent border border-deep-earth/15 text-sm text-charcoal placeholder:text-warm-stone/40 focus:outline-none focus:border-saffron transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-transparent border border-deep-earth/15 text-sm text-charcoal focus:outline-none focus:border-saffron transition-colors">
                  <option value="">Select a topic</option>
                  <option value="product">About a specific piece</option>
                  <option value="custom">Custom / bespoke inquiry</option>
                  <option value="wholesale">Wholesale / collaboration</option>
                  <option value="press">Press / media</option>
                  <option value="general">General inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-warm-stone mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-deep-earth/15 text-sm text-charcoal placeholder:text-warm-stone/40 focus:outline-none focus:border-saffron transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-saffron text-ivory text-sm tracking-wide hover:bg-saffron-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-saffron/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div {...fadeUp}>
            <h2
              className="text-2xl mb-8"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Or Reach Out Directly
            </h2>

            <div className="space-y-8">
              {/* WhatsApp */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-3">
                  WhatsApp (Preferred)
                </h3>
                <a
                  href="https://wa.me/917889557217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn inline-flex items-center gap-3 px-6 py-3 text-sm tracking-wide"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message us on WhatsApp
                </a>
                <p className="text-xs text-warm-stone/60 mt-2">
                  Usually responds within a few hours
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-3">
                  Email
                </h3>
                <a
                  href="mailto:hello@thepashmproject.com"
                  className="text-deep-earth hover:text-saffron transition-colors"
                >
                  hello@thepashmproject.com
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-3">
                  Where We Are
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Basohli, Kathua District
                  <br />
                  Jammu &amp; Kashmir, India
                </p>
                <p className="text-sm text-warm-stone/60 mt-2">
                  We don&apos;t have a retail store — our artisans work from
                  their homes, and we operate as a craft collective. But if
                  you&apos;re ever in Basohli and want to meet the weavers,
                  reach out. We&apos;d love to host you.
                </p>
              </div>

              {/* Instagram */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-warm-stone mb-3">
                  Follow Along
                </h3>
                <a
                  href="https://instagram.com/thepashmproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-earth hover:text-saffron transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @thepashmproject
                </a>
              </div>
            </div>

            {/* Poetic note */}
            <div className="mt-12 p-6 bg-deep-earth/5">
              <p
                className="text-lg italic text-deep-earth/60 leading-relaxed"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;We don&apos;t have a storefront or a showroom. We have
                homes with looms, hands with stories, and shawls waiting to
                find theirs. Write to us — the mountains are patient, and so
                are we.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
