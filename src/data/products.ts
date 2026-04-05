export interface Product {
  slug: string;
  name: string;
  price: number;
  currency: string;
  artisanSlug: string;
  artisanName: string;
  description: string;
  story: string;
  material: string;
  care: string;
  dimensions: string;
  weight: string;
  images: string[];
}

export const products: Product[] = [
  {
    slug: "himalayan-dawn",
    name: "Himalayan Dawn",
    price: 28500,
    currency: "INR",
    artisanSlug: "master-ghulam",
    artisanName: "Master Ghulam Mohammad",
    description:
      "A hand-woven pure Pashmina shawl in natural ivory, with subtle self-pattern work that catches light like first snow on the Pir Panjal range.",
    story:
      "This shawl was woven over three months during the winter of 2024, when Basohli's narrow lanes were blanketed in fog. Master Ghulam works only in natural light, weaving from dawn until the sun dips behind the Shivalik hills. He says this piece carries the patience of those short winter days — each thread placed deliberately, unhurried, the way his grandfather taught him fifty years ago.",
    material:
      "100% Pure Pashmina (Changthangi goat wool). Hand-spun, hand-woven on a traditional wooden handloom.",
    care: "Dry clean only. Store folded in muslin cloth. Keep away from direct sunlight.",
    dimensions: "200 cm × 75 cm",
    weight: "180 grams",
    images: [],
  },
  {
    slug: "saffron-fields",
    name: "Saffron Fields",
    price: 34000,
    currency: "INR",
    artisanSlug: "fatima-bi",
    artisanName: "Fatima Bi",
    description:
      "A Sozni-embroidered Pashmina in warm ivory with saffron and rust threadwork along the borders — a tribute to the saffron fields of Pampore.",
    story:
      "Fatima Bi learned Sozni embroidery from her mother, who learned it from hers. The border pattern on this shawl is her own invention — a motif she calls 'zafraan ka khwab' (the saffron dream). Each tiny stitch is done with a single needle, freehand, without any tracing. It took her four months to complete the embroidery alone. When asked why she doesn't use a pattern template, she smiles and says, 'My hands remember what my eyes have seen.'",
    material:
      "100% Pure Pashmina base. Sozni embroidery in pure silk thread. Hand-spun, hand-woven, hand-embroidered.",
    care: "Dry clean only. Never wring. Store flat in muslin. Avoid direct heat and sunlight.",
    dimensions: "200 cm × 80 cm",
    weight: "220 grams",
    images: [],
  },
  {
    slug: "river-stone",
    name: "River Stone",
    price: 12999,
    currency: "INR",
    artisanSlug: "master-ghulam",
    artisanName: "Master Ghulam Mohammad",
    description:
      "A solid-weave Pashmina in a deep, warm grey reminiscent of the river stones along the Ravi at Basohli — elemental, quiet, grounding.",
    story:
      "Master Ghulam dyed the yarn for this shawl himself, using a technique passed through three generations. The grey comes not from a single dye bath but from layering — walnut husk, then iron water, then walnut husk again. Each layer deepens the tone. He says the color is not grey but 'the shadow of the mountain at dusk.' This shawl is as close to the earth as Pashmina gets.",
    material:
      "100% Pure Pashmina. Natural-dyed using walnut husk and iron mordant. Hand-spun, hand-woven.",
    care: "Dry clean only. Natural dyes may evolve subtly over time — this is a mark of authenticity, not a defect.",
    dimensions: "200 cm × 75 cm",
    weight: "190 grams",
    images: ["/river_stone.PNG"],
  },
  {
    slug: "pahari-bloom",
    name: "Pahari Bloom",
    price: 23999,
    currency: "INR",
    artisanSlug: "fatima-bi",
    artisanName: "Fatima Bi",
    description:
      "A masterwork Pashmina adorned with Pahari-inspired floral embroidery — where Basohli's miniature painting tradition meets its textile heritage.",
    story:
      "This is Fatima Bi's most ambitious piece. Inspired by the floral borders of Basohli miniature paintings, she spent six months translating those painted motifs into Sozni embroidery. The flowers are not copied from any single painting but are her interpretation — as if the painted gardens of Basohli's royal courts had grown into thread. She worked on this piece only in the mornings, when, she says, her hands are steadiest and her eyes sharpest.",
    material:
      "100% Pure Pashmina base. Sozni embroidery in pure silk thread. Hand-spun, hand-woven, hand-embroidered.",
    care: "Dry clean only. This is a collector's piece — store flat in acid-free tissue, away from sunlight and moisture.",
    dimensions: "200 cm × 80 cm",
    weight: "240 grams",
    images: ["/pahari-bloom.PNG"],
  },
  {
    slug: "first-frost",
    name: "First Frost",
    price: 26000,
    currency: "INR",
    artisanSlug: "rafiq-ahmed",
    artisanName: "Rafiq Ahmed",
    description:
      "A lightweight Pashmina stole in natural undyed cream — the purest expression of the fiber, unadorned, unhurried.",
    story:
      "Rafiq Ahmed is the youngest weaver in our collective. He learned the craft from Master Ghulam and has been weaving for eight years. This stole is his statement of intent — no embroidery, no dye, no embellishment. Just the fiber and the weave. He wanted to prove that Pashmina, in its most elemental form, needs nothing added. The ring test confirms what your hands already know: this stole passes through a wedding ring.",
    material:
      "100% Pure Pashmina, undyed, unbleached. Hand-spun, hand-woven on a traditional pit loom.",
    care: "Dry clean recommended. Can be gently hand-washed in cold water with mild detergent. Lay flat to dry.",
    dimensions: "190 cm × 70 cm",
    weight: "130 grams",
    images: [],
  },
];
