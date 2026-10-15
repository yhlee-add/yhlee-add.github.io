export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string[];
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jul 2026 \u2013 Present",
    title: "Research Collaboration with Harvard University (with Jaeyeon Kim)",
    company: "Independent Research",
    description:
      [
        "Decomposed the Fréchet distance exactly over interpretable feature directions. [Under review at ICLR 2027]",
      ],
  },
  {
    date: "Jun 2024 \u2013 Present",
    title: "Research Officer",
    company: "Agency for Defense Development (ADD)",
    description:
      [
        "Accelerated diffusion-based synthetic data generation by ~30% with multirate integration (THG). [NeurIPS 2025]",
        "Found FID and ImageReward disagreeing while evaluating THG, which led to a study of FID. [ICMLW 2026]",
        "Rebuilt the data collection software for surveillance UAVs, enabling longer flights.",
      ],
    advisor: "Dr. Hoseong Kim",
    manager: "Dr. Eunjin Koh",
    companyUrl: "https://www.add.re.kr/eps",
  },
  {
    date: "Jan 2023 \u2013 Mar 2024",
    title: "Undergraduate Research Intern",
    company: "Computer Architecture and Systems Lab @ KAIST",
    description:
      ["Worked on efficient video understanding systems. [CVPRW 2024]"],
    advisor: "Prof. Jongse Park",
    companyUrl: "https://casyslab.kaist.ac.kr/",
  },
  {
    date: "Jan 2022 \u2013 Aug 2022",
    title: "Undergraduate Research Intern",
    company: "Neuro-Machine Augmented Intelligence Lab @ KAIST",
    description:
      [
        "Worked on robot grasping for various gripper designs. [RA-L 2023]",
      ],
    advisor: "Prof. Sungho Jo",
    companyUrl: "http://nmail.kaist.ac.kr/",
  }
];
