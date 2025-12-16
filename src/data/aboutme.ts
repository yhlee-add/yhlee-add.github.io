export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yunghee Lee",
  title: "Research Officer",
  institution: "Agency for Defense Development",
  // Note that links work in the description
  description: `
    I am a Research Officer at the <a href='https://www.add.re.kr/eps'>Agency for Defense Development</a>, 
    Korea's national defense R&D agency (similar to DARPA), and a First Lieutenant in the Republic of Korea Army. 
    I received my B.S. in Computing with a minor in Physics from <a href='https://www.kaist.ac.kr/en/'>KAIST</a>.
    <br> <br>
    My research aims to build physics-accurate and cost-efficient generative AI systems 
    by combining principled mathematical analysis with practical algorithm design.
  `,
  email: "yhlee.add@gmail.com",
  imageUrl: "/profile.png",
  // imageUrl: "/profile2.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=yfWLZ_0AAAAJ",
  githubUsername: "yhlee-add",
  linkedinUsername: "yungheelee",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.add.re.kr/eps",
  // altName: "",
  // secretDescription: "I like dogs.",
};
