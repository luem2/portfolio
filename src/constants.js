import {
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactLogo,
  reduxLogo,
  nextjsLogo,
  nodejsLogo,
  expressjsLogo,
  sequelizeLogo,
  postgresqlLogo,
  gitLogo,
  postcssLogo,
  sassLogo,
  styledComponentsLogo,
  notionLogo,
  trelloLogo,
  henryGames,
  rgbTech,
  henryGamesLogo,
  rgbTechLogo,
  windowsLogo,
  linuxLogo,
  AiFillHome,
  MdOutlineWork,
  BsFillPersonFill,
  BsStack,
  MdOutlineEmail,
} from '/src/assets';

export const techstack = [
  {
    name: 'HTML',
    img: htmlLogo,
  },

  {
    name: 'CSS',
    img: cssLogo,
  },

  {
    name: 'Javascript',
    img: javascriptLogo,
  },

  {
    name: 'GIT',
    img: gitLogo,
  },

  {
    name: 'React',
    img: reactLogo,
  },

  {
    name: 'Next JS',
    img: nextjsLogo,
  },

  {
    name: 'Redux',
    img: reduxLogo,
  },

  {
    name: 'Node JS',
    img: nodejsLogo,
  },

  {
    name: 'Express JS',
    img: expressjsLogo,
    dark: true,
  },

  {
    name: 'Sequelize',
    img: sequelizeLogo,
  },

  {
    name: 'PostgreSQL',
    img: postgresqlLogo,
  },

  {
    name: 'PostCSS',
    img: postcssLogo,
  },

  {
    name: 'SASS',
    img: sassLogo,
  },

  {
    name: 'Styled Components',
    img: styledComponentsLogo,
  },

  {
    name: 'Notion',
    img: notionLogo,
  },

  {
    name: 'Trello',
    img: trelloLogo,
  },

  {
    name: 'Windows',
    img: windowsLogo,
  },

  {
    name: 'Linux',
    img: linuxLogo,
  },
];

export const projectData = [
  {
    id: 'henryGames',
    name: 'Henry Games',
    src: henryGames,
    alt: 'henry-games',
    gh: 'https://github.com/Luem2/pi-videogames',
    web: 'https://henrygames.lucianopinol.com/',
    logo: henryGamesLogo,
    description:
      'Small application to search and create game information, filter by name, rating, genre and origin. For more information, check the repository.',
    technologies: {
      frontend: 'React, Redux',
      backend: ' Express, NodeJS, PostgreSQL, Sequelize',
    },
  },
  {
    id: 'rgbTech',
    name: 'RGBTech',
    src: rgbTech,
    alt: 'rgb-tech',
    gh: 'https://github.com/RGBTech-PF/rgbtech',
    web: 'https://rgbtech.vercel.app/',
    logo: rgbTechLogo,
    description:
      'E-commerce of technological products, focused on technology fans and gamers. It has an administrator panel, user database, access with Google and much more. For more information, check the repository.',
    technologies: {
      frontend:
        'React, Redux Toolkit, ViteJS, Tailwind CSS, Json Web Token Decode, ChartJS, AnimateCSS, React Icons, React Toastify, SwiperJS, SweetAlert 2, React Select',
      backend:
        'Express, NodeJS, PostgreSQL, Sequelize, Nodemailer, Json Web Token, Cloudinary, Bcrypt',
    },
  },
];

export const sidebarData = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
    icon: (
      <AiFillHome
        size={40}
        style={{ alignSelf: 'center', marginRight: '8px' }}
      />
    ),
  },
  {
    id: 'about',
    title: 'About',
    path: '/about',
    icon: (
      <BsFillPersonFill
        size={40}
        style={{ alignSelf: 'center', marginRight: '8px' }}
      />
    ),
  },
  {
    id: 'techStack',
    title: 'Tech Stack',
    path: '/tech-stack',
    icon: (
      <BsStack size={40} style={{ alignSelf: 'center', marginRight: '8px' }} />
    ),
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '/projects',
    icon: (
      <MdOutlineWork
        size={40}
        style={{ alignSelf: 'center', marginRight: '8px' }}
      />
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    icon: (
      <MdOutlineEmail
        size={40}
        style={{ alignSelf: 'center', marginRight: '8px' }}
      />
    ),
  },
];
