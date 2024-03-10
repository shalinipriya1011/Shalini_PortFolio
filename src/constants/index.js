import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: figma,
    },
    {
      name: "C++",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Weather_App",
      company_name: "Projects",
      icon: starbucks,
      iconBg: "#383E56",
      date: "DEC 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Snapy",
      company_name: "Web_App",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Portfolio",
      company_name: "Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "ABC",
      designation: "CFO",
      company: "ABC",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "XYZ",
      designation: "COO",
      company: "XYZ",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "PYQ",
      designation: "CTO",
      company: "PQR",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Snapy",
      description:"Built a web-based platform enabling users to search, view, and manage posts from diverse individuals, offering a convenient and efficient solution for community engagement and interaction.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shalinipriya1011/Snapy",
    },
    {
      name: "PortFolio",
      description:"Crafted a dynamic web experience featuring customizable 3D elements, interactive sections, and cohesive animations, ensuring seamless responsiveness across all devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "talwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/shalinipriya1011/Shalini_PortFolio",
    },
    {
      name: "Weather Forecasting App",
      description:"I have created a comprehensive web application that allows users to effortlessly fetch up-to-date weather information for any desired location.It also enriches the user experience by displaying atmospheric pictures corresponding to the selected location.",
      tags: [
        {
          name: "Apis",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/shalinipriya1011/Weather_app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };