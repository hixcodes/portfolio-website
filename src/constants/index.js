import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated Computer Science student with a focus on Web Development and a strong foundation in building scalable applications. With hands-on experience at companies like Garmin, I have honed my skills in front-end technologies like React and Next.js, as well as back-end development with technologies such as Spring, Node.js, Djano, AWS deployment, and MongoDB. My goal is to create innovative solutions that help deliver business growth and create a quality user experience.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Full Stack Software Developer",
    company: "TrueWind",
    description: 'Specialize in designing and building diverse web applications for diverse clients using React and JavaScript. My projects range from simple, elegant portfolio websites to large-scale, feature-rich platforms that incorporate custom-built APIs. I ensure that every application is responsive, performant, and user-centric while leveraging the latest tools and technologies to deliver exceptional results.',
    technologies: ["Javascript", "React", "Bun", "mongoDB", "Render Hosting"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Software Engineering Intern",
    company: "Garmin International - Garmin Pay",
    description: `Developed Java SDK in Spring to allow for banking apps to let user is add card details straight from their app into the Garmin Pay wallet. Created a microservice to simulate banking issuer that tested the Java SDK’s. Initialized and deployed services onto Kubernetes clusters through AWS.`,
    technologies: ["Java", "Spring", "AWS", "Kubernetes"],
  },
  {
    year: "August 2023 - December 2023",
    role: "Data Analytics and Software Development Intern",
    company: "Yoga Alliance Non-Profit",
    description: `Initially conducted data analytics on a wide variety of mental health data to find valuable patterns. Created custom data analytical programs in Python that bridged compatability with both SAS and R softwares.`,
    technologies: ["Python", "R", "SAS"],
  },
];

export const PROJECTS = [
  {
    title: "Legiscape.us Web Application",
    image: project1,
    description:
      "Legiscape is a JavaScript built political app that allows for US citizens to get free access to information on the politician's that represent them, not only on a federal and state level, but also at a local level.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Data Analytical Software",
    image: project2,
    description:
      "Custom Data Analytics software developed in Python to quickly run custom analytical processes designed by the client.",
    technologies: ["Python", "R", "SAS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Team Inventory Web Application",
    image: project4,
    description:
      "Web App developed with Django to track inventory of computer parts/systems with ability to read Excel files into database.",
    technologies: ["HTML", "CSS", "Python", "Django", "mySQL"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+1 719 960 6731",
  email: "jhickey2021@gmail.com",
};
