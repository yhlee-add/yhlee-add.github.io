export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020 \u2013 2024",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    degree: "B.S. in Computing, Summa Cum Laude",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
    // advisor: "Jongse Park",
  },
];
