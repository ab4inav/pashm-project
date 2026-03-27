export interface Artisan {
  slug: string;
  name: string;
  title: string;
  age: number;
  yearsOfExperience: number;
  specialty: string;
  location: string;
  bio: string;
  quote: string;
  story: string;
}

export const artisans: Artisan[] = [
  {
    slug: "master-ghulam",
    name: "Master Ghulam Mohammad",
    title: "Master Weaver",
    age: 68,
    yearsOfExperience: 50,
    specialty: "Hand-weaving & natural dyeing",
    location: "Basohli, Kathua District",
    bio: "The eldest weaver in our collective and the keeper of techniques that were nearly lost. Master Ghulam has been weaving Pashmina since he was eighteen, taught by his grandfather on the same wooden loom he still uses today.",
    quote:
      "Each shawl is a conversation between my hands and the fiber. Some days the wool speaks clearly, some days I must listen harder.",
    story:
      "Master Ghulam Mohammad remembers a time when every third household in Basohli had a loom. The click-clack of the shuttle was the town's heartbeat. By the time he was forty, most looms had fallen silent — the young had left for cities, and machine-made shawls from the plains had undercut the handloom weavers.\n\nHe never stopped. Through decades when the craft seemed to be dying, he kept weaving. Not out of stubbornness, he says, but because his hands didn't know how to do anything else. His loom is over a hundred years old — a pit loom made of deodar wood, its surfaces polished smooth by generations of use.\n\nMaster Ghulam is also one of the last practitioners of natural dyeing in Basohli. He sources walnut husks from the trees around his home, pomegranate rinds from the local market, and indigo from a supplier he's known for thirty years. His colors have a depth that synthetic dyes cannot replicate — they are alive, shifting subtly with light and age.\n\nToday, he is teaching two young apprentices. He says the craft will survive, but only if people learn to value the hand behind it.",
  },
  {
    slug: "fatima-bi",
    name: "Fatima Bi",
    title: "Embroidery Artist",
    age: 55,
    yearsOfExperience: 38,
    specialty: "Sozni embroidery & Pahari-inspired motifs",
    location: "Basohli, Kathua District",
    bio: "Fatima Bi transforms plain Pashmina into tapestries of extraordinary detail. Her Sozni embroidery — done with a single needle, without pattern templates — is recognized as among the finest in the region.",
    quote:
      "My mother's hands guided mine before my eyes could see the pattern. Now my hands see what my eyes cannot.",
    story:
      "Fatima Bi was born into embroidery. Her mother, her grandmother, and her great-grandmother were all Sozni artists. She began learning at seven, starting with simple border patterns, graduating to full-body embroidery by her twenties.\n\nWhat makes her work unique is her deep familiarity with Basohli's miniature painting tradition. Growing up surrounded by reproductions of these 17th-century paintings — with their bold colors, intricate floral borders, and expressive human figures — she began incorporating their motifs into her embroidery. The result is a style that is entirely her own: Pashmina that carries the visual language of Basohli's painted heritage.\n\nShe works only in natural light, sitting on the floor of her home with the shawl stretched across her lap. A single shawl can take three to six months of embroidery work. She does not trace patterns — every motif is drawn freehand with the needle, guided by memory and instinct.\n\nFatima Bi has trained over a dozen women in her neighborhood, creating a small but growing circle of embroidery artists who are keeping this tradition alive.",
  },
  {
    slug: "rafiq-ahmed",
    name: "Rafiq Ahmed",
    title: "Weaver",
    age: 32,
    yearsOfExperience: 8,
    specialty: "Fine-count weaving & contemporary Pashmina",
    location: "Basohli, Kathua District",
    bio: "The youngest member of our collective, Rafiq represents the next generation of Basohli's weaving tradition. Trained by Master Ghulam, he brings a quiet intensity to the craft and a belief that traditional Pashmina can speak to a modern audience without compromising its soul.",
    quote:
      "I don't want to modernize Pashmina. I want to show that it was always modern — we just forgot how to look at it.",
    story:
      "Rafiq Ahmed came to weaving late by Basohli standards. He had left for Jammu to study, worked in a shop for a few years, and returned home at twenty-four with no clear plan. It was Master Ghulam who suggested he try the loom — not as a career, but as a way to pass the winter.\n\nSomething clicked. Rafiq describes the feeling of weaving as meditative — a rhythm that quiets the noise of everything else. Within two years, he was producing shawls of remarkable quality. Master Ghulam says Rafiq has 'old hands on young arms.'\n\nRafiq's approach is deliberately minimal. He prefers undyed, unembroidered Pashmina — letting the fiber itself be the statement. His shawls are among the finest in count (the number of threads per inch), and he is experimenting with weaving techniques that produce an almost translucent fabric while maintaining warmth.\n\nHe is also the collective's bridge to the outside world — he manages communication, coordinates with The Pashm Project, and documents the weaving process on video. He believes that showing the work is as important as doing the work.",
  },
];
