// @ts-nocheck
import nota from "./images/projects/calculator-project.png";
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/assets/netflix-new.png";
import covidtracker from "./images/projects/covidtracker.png";
import amazon from "./images/projects/amazon.png";
import whatsapp from "./images/whatsapp.png";
import fitmap from "./images/fitmap.png";
import bankist from "./images/projects/bankist.png";
import tours from "./images/projects/tours.png";
import starbucks from "./images/assets/starbucks.png";
import movhub from "./images/assets/movhub.png";
import webrtc from "./images/assets/webrtc.png";
import watchlist from "./images/assets/wa.png";
import blackHistory from "./images/assets/black.png";

// https://highmos-frontend.vercel.app/
// https://whatsapp-cloneey.vercel.app/

// Beautiful Responsive Ecommerce Website. It has a header and a home page showing an image and data of a product, it also has a features section, a women's sneakers section, a collection section, a offers section and a footer. It also has its own page to see all the products. Developed totally mobile-first and then desktop.

export const projectData = [
  {
    title: "Netflix Clone",
    description: `💥 This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components 💃. the purpose behind this build is I want to exercise and practise scaling a huge application such as Netflix.`,
    technologies:
      "React, JavaScript, HTML, CSS, styled-components, Firebase, Firebase Authentication",
    image: flixer,
    date_created: "May 2021",
    link: "https://netflix-frontend-six.vercel.app/",
    github: "https://github.com/zourdycodes/Netflix",
  },
  {
    title: "Starbucks Clone",
    description: `This application (a Starbucks clone) was built using React (Custom Hooks, Context), Firebase & Styled Components 💃. the purpose behind this build is I want to exercise and practise scaling the design problem of the famous company website.`,
    technologies:
      "React, styled-components, framer-motion, JavaScript, HTML, CSS, GitHub, Firebase, Firebase Authentication",
    image: starbucks,
    date_created: "June 2021",
    link: "https://starbucks-frontend.vercel.app/",
    github: "https://github.com/zourdycodes/starbucks-frontend",
  },
  {
    title: "MovHub",
    description: `💥 This application was built using React (Custom Hooks, Context), Material-UI kit, Firebase & Styled Components 💃. this is a fun project and also i make it Progressive across any device`,
    technologies:
      "React, Axios, JavaScript, HTML, CSS, styled-components, Material-UI component kit, Firebase, Firebase Authentication, PWA",
    image: movhub,
    date_created: "June 2021",
    link: "https://movhub.vercel.app/",
    github: "https://github.com/zourdycodes/MovHub",
  },
  {
    title: "Video Chat WebRTC",
    description: `💥 This application was built using React (Custom Hooks, Context), WebRTC, Node JS, Express JS & Styled Components 💃. this is a fun full-stack project and I do it because i want to learn a new things, kinda a bit curious about WebRTC technology and sharping my front-end skillset and back-end skill as well`,
    technologies:
      "React, Node JS, Express Server, Heroku, JavaScript, HTML, CSS, styled-components, Material-UI component kit",
    image: webrtc,
    date_created: "April 2021",
    link: "https://videochat-react-webrtc.vercel.app/",
    github: "https://github.com/zourdycodes/videochat-react-webrtc",
  },
  {
    title: "WatchList Movie App",
    description: `This application was built using React (Custom Hooks, Context), TMDB API, Material UI kit & Styled Components 💃. this is a fun project because i do it on my personal needs its kinda hard to keep my movie list at the different platform so i built one to save my dat searching movies and luckily a lot of my friends uses it too!`,
    technologies:
      "React, JavaScript, HTML, CSS, styled-components, Material-UI component kit,  TMDB API, Axios",
    image: watchlist,
    date_created: "March 2021",

    link: "https://watchlist-react-movies.vercel.app/",
    github: "https://github.com/zourdycodes/watchlist-react-movies",
  },
  {
    title: "Black History",
    description: `to honour prominent black people, both alive and past, who was instrumental in the freedom we enjoy today. It also serves to honour all black people. As much as racism exists, we cannot exist without each other. 👩🏾🧕🧔👲`,
    technologies: "React, JavaScript, HTML, CSS, styled-components, Howler JS",
    image: blackHistory,
    date_created: "January 2021",
    link: "https://black-history.vercel.app/",
    github: "https://github.com/zourdycodes/black-history",
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
    title: "Fitmap Runner",
    description: `Fitmap is a new way for you to scheduling your fitness and daily sports more efficient with a runtime Map and the fun part is, this is an absolutely free and open-source application more or less this project might be helpful for the new comers of developers who get into JavaScript.`,
    technologies: "HTML, CSS, JavaScript, Hammer.js, Leaflet.js",
    image: fitmap,
    date_created: "December 2020",
    link: "https://fitmap.vercel.app/",
    github: "https://github.com/zourdycodes/RunnerMap",
  },
  {
    title: "Bankist Crypto",
    description: `Greetings! Fellow Developer 💥, Bankist is a new modern era of draw some money with cryptocurrency ⚖. this project was inspired by one of the crypto bank landing page but I build it with a new concept and more slightly modern.`,
    technologies:
      "SASS, JavaScript, HTML, CSS, GitHub, Netlify, ScrollReveal, Hammer.js",
    image: bankist,
    date_created: "January 2021",
    link: "https://bankist-crypto.netlify.app/",
    github: "https://github.com/zourdycodes/bankist-frontend",
  },
  {
    title: "Natours Travel",
    description: `This project is to boost my design and trigger my creativity thinking in Animating the Website without any help of external libraries, built all the animations of the website from scratch!, feel free to checkout and test the website!`,
    technologies: "SASS, JavaScript, HTML, CSS, GitHub, Netlify",
    image: tours,
    date_created: "February 2021",
    link: "https://tours-frontend.vercel.app/",
    github: "https://github.com/zourdycodes/tours-frontend",
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
