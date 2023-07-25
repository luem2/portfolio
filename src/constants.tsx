import type { IProject, SideBarObject } from '../types/types'

import { FormattedMessage } from 'react-intl'

import {
    htmlLogo,
    cssLogo,
    sassLogo,
    tailwindLogo,
    javaScriptLogo,
    typeScriptLogo,
    dockerLogo,
    reactLogo,
    reduxLogo,
    nextjsLogo,
    nodejsLogo,
    expressjsLogo,
    sequelizeLogo,
    postgresqlLogo,
    gitLogo,
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
    AiFillAndroid,
    BsFillBriefcaseFill,
    IoMdContact,
} from './assets'

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
        name: 'SASS',
        img: sassLogo,
    },

    {
        name: 'Tailwind',
        img: tailwindLogo,
    },
    {
        name: 'GIT',
        img: gitLogo,
    },

    {
        name: 'JavaScript',
        img: javaScriptLogo,
    },

    {
        name: 'TypeScript',
        img: typeScriptLogo,
    },

    {
        name: 'Docker',
        img: dockerLogo,
    },

    {
        name: 'Next JS',
        img: nextjsLogo,
    },

    {
        name: 'React',
        secondLine: 'React Native',
        img: reactLogo,
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
        name: 'PostgreSQL',
        img: postgresqlLogo,
    },

    {
        name: 'Sequelize',
        img: sequelizeLogo,
    },

    {
        name: 'Windows',
        img: windowsLogo,
    },

    {
        name: 'Linux',
        img: linuxLogo,
    },
]

export const projectData: IProject[] = [
    {
        id: 'henryGames',
        name: 'Henry Games',
        src: henryGames,
        alt: 'henry-games',
        gh: 'https://github.com/Luem2/pi-videogames',
        web: 'https://henrygames.pinol.lat/',
        logo: henryGamesLogo,
        description:
            "Individual project done at Henry's Bootcamp, is an application to search and create game information, filter by name, rating, genre and origin.",
        technologies: {
            frontend: 'Typescript, React, Redux, Docker',
            backend:
                'Typescript, Express, NodeJS, PostgreSQL, Sequelize, Swagger, Docker',
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
]

export const sidebarData: SideBarObject[] = [
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
            <BsStack
                size={40}
                style={{ alignSelf: 'center', marginRight: '8px' }}
            />
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
]

export const CV_SPANISH = '/cv-luciano-pinol-spanish.pdf'
export const CV_ENGLISH = '/cv-luciano-pinol-english.pdf'

export const navbarLinks = [
    {
        id: 'Home1',
        formattedMessage: (
            <FormattedMessage defaultMessage='Home' id='navbar.home' />
        ),
        icon: <AiFillHome size={15} />,
        path: '/',
    },
    {
        id: 'AboutMe2',
        formattedMessage: (
            <FormattedMessage defaultMessage='About' id='navbar.about' />
        ),
        icon: <BsFillPersonFill size={15} />,
        path: 'about',
    },
    {
        id: 'TechStack3',
        formattedMessage: (
            <FormattedMessage
                defaultMessage='Tech Stack'
                id='navbar.techStack'
            />
        ),
        icon: <AiFillAndroid size={15} />,
        path: 'tech-stack',
    },
    {
        id: 'Projects4',
        formattedMessage: (
            <FormattedMessage defaultMessage='Projects' id='navbar.projects' />
        ),
        icon: <BsFillBriefcaseFill size={15} />,
        path: 'projects',
    },
    {
        id: 'Contact5',
        formattedMessage: (
            <FormattedMessage defaultMessage='Contact' id='navbar.contact' />
        ),
        icon: <IoMdContact size={15} />,
        path: 'contact',
    },
]

export const hoverStyle = {
    minWidth: '100%',
    '&:hover': {
        color: '$pink600',
        fontWeight: 'bold',
    },
}
