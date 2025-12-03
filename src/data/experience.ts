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
    date: "Jun 2024 \u2013 Present",
    title: "Research Officer",
    company: "Agency for Defense Development (ADD)",
    description:
      [
        "Developed data storage and retrieval systems for surveillance UAVs.",
        "Worked on diffusion models for infrared image generation. [NeurIPS 2025]",
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
    advisor: "Jongse Park",
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
    advisor: "Sungho Jo",
    companyUrl: "http://nmail.kaist.ac.kr/",
  }
];
