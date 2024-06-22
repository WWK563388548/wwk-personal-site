import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

export const mobileNavLinks = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

export const pcNavLinks = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "about",
    path: "/about"
  },
  {
    name: "work",
    path: "/work"
  },
];

export const aboutData = {
  title: 'About me',
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Weikai Wang"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+81) 080-2379-9945"
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "China"
    },
    {
      fieldName: "Email",
      fieldValue: "wc563388548@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "Chinese, English, Japanese"
    },
  ],

};

export const experienceData = {
  icon: '/assets/icons/badge.svg',
  title: 'My experience',
  description: "xxxxxxxx",
  items: [
    {
      company: "株式会社Gakken Leap",
      position: "Architect/Manager",
      duration: "2024.6 - Present",
      contractType: "Permanent employee"
    },
    {
      company: "Match Group.Inc APAC/株式会社エウレカ",
      position: "Senior Software Engineer",
      duration: "2022.11 - 2024.5",
      contractType: "Permanent employee"
    },
    {
      company: "株式会社ZEALS",
      position: "Senior Front End Engineer",
      duration: "2019.10 - 2022.10",
      contractType: "Permanent employee"
    },
    {
      company: "株式会社GEEK",
      position: "Front End Engineer",
      duration: "2018.7 - 2019.9",
      contractType: "Permanent employee"
    },
    {
      company: "株式会社エイト",
      position: "Front End Engineer & Android Engineer",
      duration: "2017.12 - 2018.4",
      contractType: "Contract employee"
    },
  ],
};

export const educationData = {
  icon: '/assets/icons/cap.svg',
  title: 'My education',
  description: "xxxxxxxx",
  items: [
    {
      institution: "Tokyo Language Education Academy",
      duration: "2015.4 - 2017.4",
    },
    {
      institution: "Shandong Vocational College of Information Technology",
      duration: "2010.9 - 2013.7",
    },
  ],
};

export const skills = {
  title: "My skills",
  description: "xxxxx",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js"
    },
  ],
}