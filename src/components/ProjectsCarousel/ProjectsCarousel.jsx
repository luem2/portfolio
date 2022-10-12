import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectCard } from './ProjectCard';
import { henryGames, rgbTech } from '/src/assets';
import { Container } from '@nextui-org/react';
import styles from '/styles/ProjectsCarousel.module.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProjectsCarousel() {
  const projectData = [
    {
      src: henryGames,
      alt: 'henry-games',
    },
    {
      src: rgbTech,
      alt: 'rgb-tech',
    },
  ];
  return (
    <Container>
      <Swiper
        style={{
          '--swiper-navigation-color': '#3694ff',
          '--swiper-navigation-size': '30px',
          width: 'auto',
          height: 'auto',
        }}
        // className={styles.mySwiper}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={50}
        width={'auto'}
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1520: {
        //     slidesPerView: 2,
        //     spaceBetween: 50,
        //   },
        // }}
      >
        <SwiperSlide
        // style={{
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   width: '100%',
        //   height: '100%',
        // }}
        >
          <ProjectCard project={projectData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard project={projectData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard project={projectData[1]} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
