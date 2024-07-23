import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/notes.png";
import Work2 from "./assets/cryptocurrency.png";
import Work3 from "./assets/pokemon.jpeg";
import Work4 from "./assets/randomquotes.png";
import Work5 from "./assets/pwdgen.png";
import Work6 from "./assets/weather.jpeg";
import Work7 from "./assets/quiz.jpg";
import Work8 from "./assets/todo.png";
import Work9 from "./assets/amazon.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Sanjay",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Shetty",
  },

  {
    id: 3,
    title: "Age : ",
    description: "29 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Karnataka",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91-8747087847",
  },

  {
    id: 8,
    title: "Email : ",
    description: "sanjay.shetty.mys@gmail.com",
  },

  {
    id: 9,
    title: "Linkedin : ",
    description: "sanjay-shetty-6191a12a9",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English (Fluent), Kannada, Tamil & Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "7+",
    title: "Total years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Structural Engineer as Tekla Modeler <br /> Experience",
  },

  {
    id: 3,
    no: "2.3",
    title: "Frontend developer <br /> Experience",
  },
  {
    id: 4,
    no: "-1",
    title: " backend developer<br /> Experience",
  },

];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Nov 2023 - to Till [Present]",
    title: "Software Developer <span> Snipe Tech Pvt Ltd. </span>",
    desc: (
      <div>
        As a Software developer, I blend React, JavaScript & Node to create robust web applications. Utilizing React, I design dynamic user interfaces with modern features, With pro-efficient in Node, we developed both frontend and backend components and managing. My skills also include optimizing application performance. I deliver high-quality solutions meeting project needs and exceeding client expectations.
        <br />
        Project worked as Developer: UPL snipe & UPL snipe research
      </div>
    )
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb 2022 - Oct 2023",
    title: "Software Developer and Tekla Modeler <span> sanria engineering and consulting pvt ltd. </span>",
    desc:
      <div>
        Started as a software engineer at the firm and underwent training React Js & JavaScript. As a front-end developer and along with Tekla modeler, I excel in React.js and JavaScript for crafting interactive user interfaces and single-page applications. Leveraging components, state management, and modern ES6+ features, I create dynamic and reusable UI components to enhance code readability. My expertise extends to React Router and Redux for client-side routing, global state management, and scalability.I deliver high-quality software solutions in React, JS, and frontend development. 
        <br />
        Project worked as Developer: Virtuele
      </div>
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2020 - July 2021",
    title: "Tekla Modeler & Tekla API developer <span> Greenbrook Engineering services Pvt ltd. </span>",
    desc:
      <div>
         I have learnt C# for tekla software to betterment of project to reduce errors and make project flow smoothly. I was developing custom API and template within tekla sturctures software. These custoon tools streamlined modeling processes, improving efficiency and accuracy. I created 3D modeling processes, improving efficiency and accuracy.
        <br />
      </div>
  },
  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Apr 2017 - Dec 2020",
    title: "Tekla Modeler <span> DGS Techinical Services Pvt Ltd </span>",
    desc: "I created detailed 3D models of various structural elements using Tekla structures software. This involved generating fabrication drawings, material lists and shop drawing to meet project reqirements. Collaborating with cross-functional teams, BIM coordination, contributing to seamless project execution.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title:
      "BTech<span> Vidya Vikas Institue of Technology </span>",
    // desc: "Mysore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Diploma <span> Govt C.P.C.Polytechnic </span>",
    // desc: "Mysore",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "High School <span> St.Anthonys High School </span>",
    // desc: "Mysore",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML & CSS",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "96",
  },

  {
    id: 3,
    title: "React.Js",
    percentage: "84",
  },

  {
    id: 4,
    title: "Node.Js",
    percentage: "60",
  },

  {
    id: 5,
    title: "Docker",
    percentage: "55",
  },

  {
    id: 6,
    title: "Kubernetes",
    percentage: "55",
  },

  {
    id: 7,
    title: "Jenkins",
    percentage: "55",
  },

  {
    id: 8,
    title: "AWS",
    percentage: "55",
  },
];

export const portfolio = [
  {
    id: 3,
    img: Work1,
    title: "Notes",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Notes Application",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React,Material UI",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/notes",
      },
    ],
  },

  {
    id: 10,
    img: Work8,
    title: "ToDo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ToDo",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/todo",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
