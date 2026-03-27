export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  type: "story" | "photo-essay" | "short";
  content: string;
  readTime: string;
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-basohli",
    title: "Why Basohli",
    excerpt:
      "Basohli is not a factory. It is not a supply chain origin. It is a town of 8,000 people where the mountains meet the plains, and where a textile tradition has survived — barely — for centuries.",
    date: "2024-12-15",
    type: "story",
    readTime: "6 min read",
    content: `When people hear "Pashmina," they think of Kashmir. The Dal Lake, the shikaras, the bustling markets of Lal Chowk. And yes, Srinagar is the commercial heart of the Pashmina trade. But the soul of Pashmina — the spinning, the weaving, the quiet daily labor of turning raw fiber into something extraordinary — lives in smaller places. Places like Basohli.

Basohli sits at the edge of the Shivalik hills in Kathua district, where the mountains begin their climb toward the Pir Panjal range. It is a town that most maps barely acknowledge. But in the world of Indian art, Basohli is a name that resonates. In the 17th and 18th centuries, this small town produced a school of miniature painting — the Basohli school — that is considered among the most vibrant and expressive in Indian art history.

What is less known is that Basohli also had a thriving textile tradition. The same artistic sensibility that produced those paintings — bold color, fine detail, a reverence for natural beauty — also expressed itself in weaving. Pashmina shawls woven in Basohli carried a character distinct from those of the Kashmir Valley: a slightly different hand-feel, patterns influenced by the Pahari aesthetic, and techniques adapted to the local environment.

This tradition nearly died. Decades of neglect, competition from machine-made textiles, and the migration of young people to cities left only a handful of weavers still working in Basohli. When we first visited, we found Master Ghulam Mohammad weaving alone in his home — the last full-time handloom weaver in a town that once had dozens.

The Pashm Project began with a simple conviction: that Basohli's textile heritage is worth reviving. Not as a museum piece, but as a living craft — producing shawls that people wear, cherish, and pass down. We work with the weavers of Basohli to create authentic Pashmina that carries the specific character of this place and these hands.

This is why we say Basohli. Not because it is a marketing story, but because it is the truth of where and how these shawls are made.`,
  },
  {
    slug: "anatomy-of-a-shawl",
    title: "The Anatomy of a Pashmina Shawl",
    excerpt:
      "From a Changthangi goat on the Ladakhi plateau to a finished shawl in your hands — the journey takes months and passes through many hands.",
    date: "2025-01-20",
    type: "photo-essay",
    readTime: "4 min read",
    content: `A Pashmina shawl begins not on a loom, but on a mountainside. At altitudes above 14,000 feet on the Changthang plateau of Ladakh, the Changthangi goat grows an undercoat of extraordinary fineness — each fiber measuring just 12-16 microns in diameter, finer than the finest Merino wool.

Every spring, as temperatures rise, the goats naturally shed this undercoat. Herders gently comb the fiber from the goats — a process that yields only about 150-200 grams of raw Pashmina per animal per year.

The raw fiber arrives in Basohli as a tangled, oily mass. It must be cleaned, sorted by fineness, and then spun into yarn. In Basohli, this spinning is done entirely by hand, using a traditional spinning wheel called a charkha. A skilled spinner can produce about 10-15 grams of yarn per day.

The yarn is then set on the loom. Basohli's weavers use pit looms — wooden frames set into the ground, operated entirely by hand and foot. There are no motors, no automation. The weaver controls every thread, every pass of the shuttle.

A plain Pashmina shawl takes two to three weeks of continuous weaving. If the shawl is to be embroidered — with Sozni needlework, for example — that adds months more. The embroidery is done with a single needle, stitch by tiny stitch, without any tracing or template.

By the time a finished Pashmina shawl reaches your hands, it carries within it months of labor and centuries of knowledge. It is not a product. It is an inheritance.`,
  },
  {
    slug: "winter-light-basohli",
    title: "Winter Light in Basohli",
    excerpt:
      "A short note on why our weavers work only in natural light, and what that means for the shawls they create.",
    date: "2025-02-10",
    type: "short",
    readTime: "2 min read",
    content: `Basohli's winter days are short. The sun clears the hills by eight and dips behind them by five. In between, the light is extraordinary — low, golden, and clean in a way that electric light can never replicate.

Our weavers work by this light. Not as an affectation, but as a necessity — the fineness of Pashmina fiber means that artificial light creates shadows that hide inconsistencies in the weave. Natural light reveals everything.

This means our weavers work slowly in winter, producing fewer shawls. It also means that every shawl made in these months has been seen — truly seen — by the hands that made it. There is no hiding behind speed or artificial brightness.

We mention this not to romanticize slow production, but to explain why we cannot rush. A shawl made in good light is a shawl made with clear eyes.`,
  },
];
