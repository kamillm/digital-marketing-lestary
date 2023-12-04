/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useTheme } from 'next-themes';

// Swiper Js
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import CardFeatured from '../CardFeatured/CardFeatured';
import { projects } from '../../../../public/data';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const SectionFeatured = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const { resolvedTheme } = useTheme();

  return (
    <section id="featured" data-aos="fade-up">
      <div className="container px-4 px-lg-5">
        <div className="row justify-content-between">
          <div className="col-auto">
            <h2 className={`section-title text-${resolvedTheme === 'dark' ? 'light' : 'dark'}`}>Featured Projects</h2>
          </div>
          <div className="col-auto my-auto d-none d-lg-flex gap-2">
            <button type="button" className={`btn border-0 text-${resolvedTheme === 'dark' ? 'info' : 'dark'} shadow-none p-0`} ref={navigationPrevRef} title="Prev">
              <FaChevronCircleLeft size="2em" />
            </button>
            <button type="button" className={`btn border-0 text-${resolvedTheme === 'dark' ? 'info' : 'dark'} shadow-none p-0`} ref={navigationNextRef} title="Next">
              <FaChevronCircleRight size="2em" />
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 overflow-hidden my-3">
        <Swiper
          id="swiper"
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            375: {
              slidesPerView: 1.1,
              slidesOffsetBefore: 10,
              slidesOffsetAfter: 10,
            },
            414: {
              slidesPerView: 1.2,
              slidesOffsetBefore: 10,
              slidesOffsetAfter: 10,
            },
            768: {
              slidesPerView: 2.2,
              slidesOffsetBefore: 40,
              slidesOffsetAfter: 40,
            },
            992: {
              slidesPerView: 2.4,
              slidesOffsetBefore: 70,
              slidesOffsetAfter: 70,
            },
            1200: {
              slidesPerView: 1.3,
              slidesOffsetBefore: 70,
              slidesOffsetAfter: 70,
            },
            1440: {
              slidesPerView: 1.3,
              slidesOffsetBefore: 115,
              slidesOffsetAfter: 115,
            },
            1600: {
              slidesPerView: 1.3,
              slidesOffsetBefore: 180,
              slidesOffsetAfter: 180,
            },
          }}
          style={{ padding: '20px 0px 60px 0px' }}
        >
          {projects.filter((project) => project.featured === true).map((project, index) => (
            <SwiperSlide
              style={{ height: 'auto' }}
              key={index}
            >
              <CardFeatured
                title={project.title}
                thumbnail={project.thumbnail}
                role={project.role}
                description={project.description}
                builtwith={project.built_with}
                link={project.link}
                github={project.github}
              />
            </SwiperSlide>
          )).reverse()}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionFeatured;
