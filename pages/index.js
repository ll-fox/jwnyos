import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import HomeScroll from '../components/HomeScroll'
import AboutUs from '../components/AboutUs'
import Purchase from '../components/Purchase'
import Manipulation from '../components/Manipulation'
import HomeFooter from '../components/HomeFooter'
import Modal from '../components/Modal'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
// import required modules
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules'
export default function Home({ services }) {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true
        }}
        // nested={true}
        // touchmovePropagation={true}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper"
        effect="fade"
        style={{
          '--swiper-navigation-color': '#c49b45',
          '--swiper-pagination-color': '#c49b45'
        }}
      >
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUs />
        </SwiperSlide>
        <SwiperSlide>
          <Manipulation />
        </SwiperSlide>
        <SwiperSlide>
          <Purchase />
        </SwiperSlide>
        {/* <SwiperSlide>
          <ChooseUs />
        </SwiperSlide> */}
        <SwiperSlide>
          <HomeFooter />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export const getStaticProps = () => {
  const services = data
  return {
    props: { services }
  }
}
