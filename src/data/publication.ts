export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  pageUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "ICML Workshop CTB",
    title: "Rethinking FID Through the Geometry of the Reference Dataset",
    authors: "Yunghee Lee, Byeonghyun Pak",
    paperUrl: "https://openreview.net/pdf?id=QDdHFImjpH",
    // codeUrl: "https://github.com/yhlee-add/THG",
    // pageUrl: "https://yhlee-add.github.io/THG/",
    tldr: "Reference dataset geometry significantly moderates FID, so distributional metrics should be reported alongside dataset geometry.",
    // award: "🏆 Best Paper Award",
    imageUrl: "/rethinking.png"
  },
  {
    year: "2026",
    conference: "CVPR Workshop PVUW",
    title: "Pixel-level Scene Understanding in One Token: Visual States Need What-is-Where Composition",
    authors: "Seokmin Lee, Yunghee Lee, Byeonghyun Pak, Byeongju Woo",
    paperUrl: "https://arxiv.org/pdf/2603.13904",
    codeUrl: "https://github.com/SeokminLee-Chris/CroBo",
    pageUrl: "https://seokminlee-chris.github.io/CroBo-ProjectPage/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "CroBo learns compact visual states that capture what-is-where pixel-level scene composition, enabling stronger what-moves-where dynamic scene understanding.",
    imageUrl: "/crobo.png"
  },
  {
    year: "2025",
    conference: "NeurIPS",
    title: "Tortoise and Hare Guidance: Accelerating Diffusion Model Inference with Multirate Integration",
    authors: "Yunghee Lee, Byeonghyun Pak, Junwha Hong, Hoseong Kim",
    paperUrl: "https://arxiv.org/pdf/2511.04117",
    codeUrl: "https://github.com/yhlee-add/THG",
    pageUrl: "https://yhlee-add.github.io/THG/",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Tortoise and Hare Guidance accelerates diffusion sampling by integrating the guidance term on a coarser timestep grid.",
    // award: "🏆 Best Paper Award",
    imageUrl: "/thg.webp"
  },
  {
    year: "2024",
    conference: "CVPR Workshop ECV",
    title: "LVS: A Learned Video Storage for Fast and Efficient Video Understanding",
    authors: "Yunghee Lee, Jongse Park",
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2024W/ECV24/papers/Lee_LVS_A_Learned_Video_Storage_for_Fast_and_Efficient_Video_CVPRW_2024_paper.pdf",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    award: "Oral Presentation",
    imageUrl: "/lvs.png",
    tldr: "LVS memoizes feature vectors for already-seen video clips and reuses them for future video understanding queries."
  },
  {
    year: "2023",
    conference: "IEEE Robotics Autom. Lett. (RA-L)",
    title: "HybGrasp: A Hybrid Learning-to-Adapt Architecture for Efficient Robot Grasping",
    authors: "Jungwook Mun, Khang Truong Giang, Yunghee Lee, Nayoung Oh, Sejoon Huh, Min Kim, Sungho Jo",
    paperUrl: "http://nmail.kaist.ac.kr/paper/ral24.pdf",
    imageUrl: "/hybgrasp.png",
    tldr: "HybGrasp efficiently learns to adapt to different gripper designs by refining the base pose with lightweight modules."
  }
];
