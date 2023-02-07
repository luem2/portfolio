import React from 'react'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProjectCard } from './ProjectCard'
import { projectData } from '../../constants'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function ProjectsCarousel() {
    return (
        <>
            <Swiper
                style={{
                    width: '100%',
                    height: '100%',
                }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                direction={'horizontal'}
                modules={[Navigation, Pagination]}
                slidesPerView={2}
                spaceBetween={50}
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
    )
}
