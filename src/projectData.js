// import pyramid from "./images/projects/amazon-clones.png";
import nota from "./images/projects/calculator-project.png";
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/projects/netflix.png";
import covidtracker from "./images/projects/covidtracker.png";
import amazon from "./images/projects/amazon.png";
import whatsapp from "./images/whatsapp.png";

export const projectData = [
  {
    title: "Netflix Clone",
    description: `It is a clone of Netflix's front-end web interface. This app was created using React 
    functional components, axios for async/await requests, and deployed on Google Firebase. It features 
    movie data pulls from The Movie Database (TMDB) for current trends and movie posters. The trailer feature will be updated soon.`,
    technologies:
      "React, Axios, JavaScript, HTML, CSS, GitHub, Firebase, Firebase Authentication, Stripe Payments",
    image: flixer,
    date_created: "November 2020",
    link: "https://netflix-clone-c1f35.web.app/",
    github: "https://github.com/zourdycodes/netflix-clone",
  },
  {
    title: "React-Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on Tim Baker Portfolio. The site is mobile and desktop responsive, with 
        additional functionality that people can change with their own personal infos. `,
    technologies:
      "React, JavaScript, HTML, CSS, GitHub, Netlify, AOS.js, Flexwider.js",
    image: portfolio,
    date_created: "October 2020",
    link: "https://zourdy.netlify.app",
    github: "https://github.com/zourdycodes/portfolio-web",
  },
  {
    title: "Amazon Clone",
    description: `Amazon was designed and built for an educational purposes as well as to deep dive my front-end development skillset.this is my way to rewind my knowledge about programming, this project is very big and scalable with solid architecture`,
    technologies:
      "Next JS, Node JS, React, Redux, JavaScript, Tailwind CSS, GitHub, Vercel, Firebase, Cloud Firestore, Next Auth, Cart Functionality and Stripe Payments",
    image: amazon,
    date_created: "January 2021",
    link: "https://amazon-frontend-tawny.vercel.app/",
    github: "https://github.com/zourdycodes/amazon-frontend",
  },
  {
    title: "CORONA VIRUS TRACKER",
    description: `This project was built for making a contribution to the world, to inform people around the world about coronavirus disease. as a Web Developer, I had a responsibility to make some contribution to the conditions of the world nowadays, also this Web Application is to exercise my Data Visualization Skills with ChartJS. I hope I could do better.`,
    technologies:
      "ReactJS, React-router, AxiosJS, ChartJS, LeafletMap.js , JavaScript, HTML, CSS, GitHub, Firebase",
    image: covidtracker,
    date_created: "September 2020",
    link: "https://coronavirus-zourdy.web.app/",
    github: "https://github.com/zourdycodes/covid-tracker",
  },
  {
    title: "Whatsapp Clone",
    description: `Real-Time chat messaging with timestamp and Last Seen functionality, I created this project focusing on learning how messaging app works behind the scenes and at the moment I was thinking about whatsapp, this project also to boost my knowledge in Next and React JS and front-end development skills. feel free to check it out and tested it!`,
    technologies:
      "Next JS, React, Styled-Components, Cloud Firestore, Lodash, Node JS, Moment.js, Google Log-in",
    image: whatsapp,
    date_created: "February 2021",
    link: "https://whatsapp-cloneey.vercel.app/",
    github: "https://github.com/zourdycodes/whatsapp-clone",
  },
  {
    title: "Glasmorphism Calculator",
    description: `This calculator was built for rewind my knowledge about Mathematics and Logical Thinking
    I have a plan to update this calculator to become scientific calculator with a few additional features such as sin0 cos0, etc.`,
    technologies: "Animate.css, JavaScript, HTML, CSS, GitHub, Netlify",
    image: nota,
    date_created: "August 2020",
    link: "https://calculator-neurmophism-zourdythedev.netlify.app/",
    github: "https://github.com/zourdycodes/neurmophism-calculator",
  },
];
