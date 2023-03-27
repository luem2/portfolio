import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import { projectData } from '../../constants'
import { Box } from '../Box'
import { gradient4 } from '../../assets'

import { ProjectCard } from './ProjectCard'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function ProjectsCarousel() {
    return (
        <>
            <Box
                css={{
                    position: 'absolute',
                    top: '-1',
                    zIndex: '$0',
                }}
            >
                <Image
                    alt='gradient-projects'
                    height={1700}
                    src={gradient4}
                    width={1900}
                />
            </Box>
            <Swiper
                navigation
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
                direction={'horizontal'}
                loop={true}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={2}
                spaceBetween={50}
                style={{
                    width: '100%',
                    height: '100%',
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
