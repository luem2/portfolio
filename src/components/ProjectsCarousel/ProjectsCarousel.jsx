import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectCard } from './ProjectCard';
import { henryGames, rgbTech, henryGameslogo, rgbTechlogo } from '/src/assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProjectsCarousel() {
  const projectData = [
    {
      name: 'Henry Games',
      src: henryGames,
      alt: 'henry-games',
      gh: 'https://github.com/Luem2/pi-videogames',
      web: 'https://henrygames.lucianopinol.com/',
      logo: henryGameslogo,
      description:
        ' Small application to search and create game information, filter by name, rating, genre and origin. For more information, check the repository.',
      technologies: {
        frontend: 'React, Redux',
        backend: ' Express, NodeJS, PostgreSQL, Sequelize',
      },
    },
    {
      name: 'RGBTech',
      src: rgbTech,
      alt: 'rgb-tech',
      gh: 'https://github.com/RGBTech-PF/rgbtech',
      web: 'https://rgbtech.vercel.app/',
      logo: rgbTechlogo,
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
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#3694ff',
          '--swiper-navigation-size': '40px',
          width: '100%',
          height: '100%',
        }}
        pagination={{ clickable: true }}
        navigation
        direction={'horizontal'}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={50}
        height={'100%'}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1520: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <ProjectCard project={projectData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard project={projectData[1]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
