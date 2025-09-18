import { BriefcaseBusiness, FolderGit2, House, Star } from "lucide-react";
import Photo from "../assets/img/fav/me.png";
import MaleAvator from "../assets/img/icons/male-avatar.png";
import ReactIcon from "../assets/img/icons/skills-tools/react.png";
import BootstrapIcon from "../assets/img/icons/skills-tools/bootstrap.png";
import ChromeIcon from "../assets/img/icons/skills-tools/chrome.png";
import CSSIcon from "../assets/img/icons/skills-tools/css.png";
import GithubIcon from "../assets/img/icons/skills-tools/github.png";
import HTMLIcon from "../assets/img/icons/skills-tools/html.png";
import JavaScriptIcon from "../assets/img/icons/skills-tools/javascript.png";
import TailwindCSSIcon from "../assets/img/icons/skills-tools/tailwindcss.png";
import TypeScriptIcon from "../assets/img/icons/skills-tools/typescript.png";
import VSCodeIcon from "../assets/img/icons/skills-tools/vscode.png";
import LinkedInIcon from "../assets/img/icons/social-icons/linkedin.png";
import DiscordIcon from "../assets/img/icons/social-icons/discord.png";
import InstagramIcon from "../assets/img/icons/social-icons/instagram.png";
import MediumIcon from "../assets/img/icons/social-icons/facebook.webp";

import ReactPro1 from "../assets/img/projects/pimpacthome.png";
import ReactPro2 from "../assets/img/projects/new.png";
import ReactPro3 from "../assets/img/projects/pro2.png";
import HTML1 from "../assets/img/projects/in2itive.png";
import HTML2 from "../assets/img/projects/pro3.png";



export const NavLinks = [
  { id: 1, name: "Home", url: "/#Hero", icon: House },
  { id: 3, name: "Work", url: "/#Work", icon: FolderGit2 },
  { id: 2, name: "Experience", url: "/#Experience", icon: BriefcaseBusiness },
  { id: 3, name: "Reviews", url: "/#Testimonials", icon: Star },
];

export const firstName = "Rehan";
export const lastName = "Siddique";
export const fullName = "Rehan Siddique";
export const profilePhoto = Photo;

// Social Links
export const GitHubProfile = "https://github.com/rehansiddique12";
export const LinkedInProfile = "https://www.linkedin.com/in/rehan-siddique-37916b344/";
export const MediumProfile = "https://www.facebook.com/profile.php?id=100073708785319";
export const InstagramProfile = "https://www.instagram.com/?next=%2Ffxcal%2Fdisclosure%2F%3Fnext%3D%252F";

// Hero Section
export const HeroSectionHeading =
  "Frontend Developer </br> for  Web Applications";
// export const HeroSectionHeading = "Creative Frontend Developer <br/> for Scalable Web & Mobile Apps ";
export const HeroSectionSubHeading =
  "Building fast, elegant interfaces with ReactJS, and Tailwind CSS.";
export const HeroLetsConnectButton = "Let's Connect";
export const HeroLetsSeeMyWorkButton = "See My Work";



// Project Section
export const ProjectsSectionHeading = "My Recent Work";
export const ProjectsSectionSubHeading =
  "Check out what I've been working on lately.";
export const ProjectsSectionGithubButton = "View More on";
export const ProjectsCardViewLiveSiteButton = "View Live Site";
export const ProjectCardsData = [
  {
    id: 1,
    title: "PIMpact",
    description:
      "PIMpact is an advanced Product Information Management (PIM) solution specifically designed for online sellers. It works by centralizing all your product data into a single platform",
    image: ReactPro1,
    type: "Company",
    year: "2025",
    technologies: ["React JS", "TypeScript", "Tailwind CSS", "Redux-Toolkit", "Shadcn"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:"https://pimpact.io/",
    githubUrl: "https://github.com/Dev-DigiMark/pimpackt-frontend-v2",
  },
  {
    id: 2,
    title: "Keto-Smoke",
    description: "Keto Smoke offers all-natural, low-carb seasonings crafted to enhance your BBQ with bold, smoky flavors. Perfect for keto lifestyles, it adds taste without compromise",
    image: ReactPro2,
    type: "Personal",
    year: "2025",
    technologies: ["React JS", "TypeScript", "Tailwind CSS"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://keto-smoke.vercel.app/",
    githubUrl: "https://github.com/rehansiddique12/KetoSmoke",
  },
  {
    id: 3,
    title: "Estimaitor",
    description:
      "Automatically detect, measure, compare and label project spaces and features on architectural plans and drawings in seconds, not hours",
    image: ReactPro3,
    type: "Company",
    year: "2025",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://estim-aitor.vercel.app/auth/login",
    githubUrl: "https://github.com/rehansiddique12/Estimator-React",
  },
  {
    id: 4,
    title: "IN2ITIVE",
    description: "in2itive is a creative design project focused on crafting modern, functional, and aesthetic architecture — from houses to buildings — with innovation at its core",
    image: HTML1,
    type: "Client",
    year: "2024",
    technologies: [
     "HTML",
     "CSS",
     "JavaScript",
    ],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://in-2-itive.vercel.app/",
    githubUrl:
      "https://github.com/rehansiddique12/IN2ITIVE",
  },
  {
    id: 5,
    title: "Provanta Pharma",
    description: "Provanta Pharma is a Pakistani veterinary company providing quality pharmaceutical solutions for poultry and livestock, focused on innovation, care, and customer trust",
    image: HTML2,
    type: "Clinte",
    year: "2024",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://www.provantapharma.com/",
    githubUrl:
      "https://github.com/rehansiddique12/Provanta",
  },
];

// Testimonials Section
export const TestimonialsSectionHeading = "What Clients Say About Me";
export const TestimonialsSectionSubHeading =
  "Don't just take my word for it. See what my clients have to say about my work.";
export const testimonialsData = [
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
  {
    text: "Collaborating with Rehan Siddique on Web Application Development brings unparalleled expertise, efficiency, and creativity to every project",
    image: MaleAvator,
    name: "Majid Rashid",
    role: "Web Applications",
  },
];

// Experience Section
export const ExperienceSectionHeading = "Work Experience";
export const ExperienceSectionSubHeading =
  "Here's a look at my current role and previous experiences.";
export const ExperienceData = [
  {
    company: "DigiMark Developers",
    position: "Junior Software Engineer",
    duration: "Dec 2024 - Present",
    location: "Johar Town, Lahore, Pakistan",
    description:
      "Acquired proficiency in Tailwind CSS, JavaScript, TypeScript, and React for building dynamic web applications. Gained hands-on experience in developing responsive, visually appealing, and user-friendly interfaces that enhance user experience.",
    technologies: [
      "Tailwind CSS",
      "React",
      "JavaScript",
      "TypeScript",
      "GitHub",
    ],
    type: "current",
  },
  
  {
    company: "Cosmosoft Business Solutions Pvt. Ltd.",
    position: "Front-End Web Development - Internship",
    duration: "July 2022 - Sep 2022",
    location: "Johar Town, Lahore, Pakistan",
    description:
      "Acquired proficiency in HTML, CSS, Tailwind CSS, Bootstrap, and jQuery. Gained hands-on experience in developing visually appealing and user-friendly web interfaces. Crafted responsive web designs that enhance user experience.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "JavaScript",
    ],
    type: "previous",
  },
];

// About Section
export const AboutSectionHeading = "A Glimpse into My World";
export const AboutSectionSubHeading =
  "Here, you'll find a snapshot of my coding activity, the tools I master, my key skills, and ways to connect with me.";
export const AboutSectionSkillsHeading = "My Skills & Tools";
export const SkillsData = [
 
  {
    id: 1,
    name: "BootStrap",
    icon: BootstrapIcon,
  },
  {
    id: 2,
    name: "Chrome",
    icon: ChromeIcon,
  },
  {
    id: 3,
    name: "CSS",
    icon: CSSIcon,
  },

  {
    id: 4,
    name: "Github",
    icon: GithubIcon,
  },
  {
    id: 5,
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    id: 6,
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    id: 7,
    name: "React",
    icon: ReactIcon,
  },
  
  {
    id: 8,
    name: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  {
    id: 9,  
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    id: 10,
    name: "VS Code",
    icon: VSCodeIcon,
  },
];
export {
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
  GithubIcon,
};

// Footer Section
export const FooterSectionHeading = "Anything in Mind?";
export const FooterSectionSubHeading = "Let's Talk";
export const FooterSectionBtn = "Let's Talk"