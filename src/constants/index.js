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
    python,
    ecommerce,
    restaurant,
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
    }
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
      name: "React JS",
      icon: reactjs,
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
      name: 'Python',
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Assistant Manager",
      company_name: "Menards",
      //icon: starbucks,
      //iconBg: "#383E56",
      date: "March 2020 - May 2021",
      points: [
        "Allocating tasks to and working with team members.",
        "Keeping the department clean.",
        "Learning information about various paints and stains in order to help customers better.",
        "Stocking shelves.",
        "Working on paperwork to take inventory, keep track of stolen goods, and schedule team member hours."
      ],
    },
    {
      title: "Helm Assembly Team Member",
      company_name: "Brunswick",
      //icon: tesla,
      //iconBg: "#E6DEDD",
      date: "Jul 2021 - Aug 2021",
      points: [
        "Used various tools, including drills, hole saws, and saws to prepare fiberglass helms.",
        "Worked with overs in a production line to keep assembling helms for boats.",
        "Learned about the helm and boat assembly process.",
      ],
    },
    {
      title: "Zund Operator",
      company_name: "New Process",
      //icon: shopify,
      //iconBg: "#383E56",
      date: "Mar 2022 - Present",
      points: [
        "Operate different machines to cut, laminate, and print labels.",
        "Inspects and ships labels out to customers.",
        "Keeps the shop clean and organized whenever workflow is slow.",
        "Trains others to perform the same duties.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "An ecommerce web store for purchasing materials for playing Dungeons & Dragons. Made using react and css for styling as well as some react libraries for adding purchase functionality.",
      link: 'https://ecommercedndstore.netlify.app/',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "commerce.js",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/KAlexander17/EcommerceWebsite",
    },
    {
      name: "Restaurant Website",
      description:
        "A website for a mock restaurant serving italian cuisine. Made with javascript, react, and css for styling.",
      link: 'https://reastaurantwebsite.netlify.app/',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/KAlexander17/BrochureWebsite",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };