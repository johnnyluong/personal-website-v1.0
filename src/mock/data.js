import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Johnny Luong', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Johnny Luong',
  subtitle: 'I\'m your next Developer.',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Johnny Luong, and I’m a 4th year Mathematics-Computer Science major \
  at the University of California, San Diego. I am passionate about leveraging modern technology to \
  craft beautiful solutions to problems that have a great impact on others in the mobile application \
  space. As a Software Engineer, my greatest skills are my adaptability by being able to quickly \
  learn new tools and frameworks as well as my breadth of experience building mobile \
  applications using frameworks such as React-Native, Flutter, and Firebase. I am currently in \
  search of a company whose goals align with my own, an environment that would stimulate my career \
  growth and where my contributions would have significant impact.',
  paragraphTwo: 'Beyond my career interests, I am a keen photographer, a tech enthusiast, and an avid tennis player.',
  paragraphThree: 'I would love to connect and talk about Software Developer opportunities at your company!',
  resume: 'https://drive.google.com/file/d/1DX9dHEqKAGHG_eTxdMkc6o5A62DXD65Z/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'circle2.png',
    title: 'Circle - Engineering Manager',
    info: 'Among young adults, networking for career growth can be initially intimidating and difficult \
    to maintain later on. Our team set out to resolve this my producing a solution that allows users to \
    track their professional network connections and strengthen them where ever they go. Circle is a \
    cross platform mobile application dedicated to helping you manage and utilize your professional network.',
    info2: 'As Engineering Manager, I am responsible for the technical oversight of the project. This \
    entails making key design choices, code reviews, and managing the overall development progress \
    using the Agile methodology. I aim to bridge the gap between our developers and other team members \
    to ensure a productive workflow.',
    url: 'https://www.risesummer2020.org/team5',
    repo: 'https://github.com/rise-summer/team5-circle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'circle1.png',
    title: 'Circle - Software Developer',
    info: 'Using the Flutter mobile framework, I primarily focused on building front-end components \
    and widgets to align with the designs of our team\'s UI/ UX Designers.I also implemented many of \
    the core features of the Minimum Viable Product, such as user account functionality, database \
    integration, and contact list management system.  In early prototypes, I conducted extensive \
    testing to discover weaknesses that could were refactored to improve speed by 8% and overall reliablity.',
    info2: 'Using Cloud Firestore, we were able to dynamically \
    store user data to the cloud to allow the user to access their data on any mobile device.',
    url: 'https://www.risesummer2020.org/team5',
    repo: 'https://github.com/rise-summer/team5-circle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'qdusa2.png',
    title: 'Quantum Design - Software Engineering Intern 2020',
    info: 'Continuing the project where I had left off from the previous year, I focused on \
    testing the program to seek ways to improve it as well as scale it to meet the requirements \
    initially planned. Such refactorization resulted in an overall runtime speed increase of ~8%. \
    This produced software that served as an internal tool with a user interface that \
    would allow one to run simulations under specific conditions and criteria.',
    info2: 'The image to the right is a dataset similar to that which I worked closely with. \
    *The precise details of the project cannot be legally disclosed',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'habitat.jpg',
    title: 'Habitat App',
    info: 'For a software development course, the team built a cross platform mobile \
    application that allowed one to track tasks in a collaborative and user-friendly \
    manner to encourage establishing habits and productivity. I focused on the system \
    and functional design by mapping out the interconnectivity of our features. Using \
    React-Native, Node.js, Express, and MongoDB, we implemented a full stack application \
    following extensive reasearch and planning.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'qdusa.png',
    title: 'Quantum Design - Software Engineering Intern 2019',
    info: 'Presented a project idea, I conducted research to establish a proof of concept. \
    The process entailed analyzing research papers pertaining to electron spectroscopy and seeking \
    open source software that could be utilized for its simulation. Additionally, extensive \
    preparations to pursue the optimal development strategy were made in terms of system design. As the sole developer, I \
    built a protoype cabable of generating the desired data sets derived from running simulations \
    algorithms.',
    info2: '*The precise details of the project cannot be legally disclosed',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like what you see?',
  btn: '',
  email: 'thejohnnyluong@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thejohnnyluong/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/johnnyluong',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
