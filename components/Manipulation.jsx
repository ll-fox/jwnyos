import React, { useRef, useState } from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import style from  '../styles/Manipulation.module.css'

export default function Manipulation() {
  const [swiperRef, setSwiperRef] = useState(null)
  // Create array with 500 slides
  const [slides, setSlides] = useState([
    {
      path: '/img/WechatIMG1573.jpg'
    },
    ,
    {
      path: '/img/WechatIMG1580.jpg'
    },
    {
      path: '/img/WechatIMG1581.jpg'
    },
    {
      path: '/img/WechatIMG1582.jpg'
    },
    {
      path: '/img/WechatIMG1574.jpg'
    },
    {
      path: '/img/WechatIMG1575.jpg'
    },
    {
      path: '/img/WechatIMG1576.jpg'
    },
    {
      path: '/img/WechatIMG1577.jpg'
    },
    {
      path: '/img/WechatIMG1578.jpg'
    },
    {
      path: '/img/WechatIMG1579.jpg'
    }
  ])

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0)
  }

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        initialSlide={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction'
        }}
        navigation={true}
        virtual
        style={{
          '--swiper-navigation-color': '#c49b45',
          '--swiper-pagination-color': '#c49b45',
          '--swiper-navigation-sides-offset': '20px',
          '--swiper-pagination-bottom': '0px',
          height: '40%',
          width: '80%',
          marginTop: '150px',
          paddingBottom: '20px'
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className={style.sliderItem}>
              <Image src={item.path} layout="fill" objectFit="contain" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className={style.buttons}>
        <button onClick={() => slideTo(1)} className={style.button}>
          2018
        </button>
        <button onClick={() => slideTo(3)} className={style.button}>
          2019
        </button>
        <button onClick={() => slideTo(5)} className={style.button}>
          2020
        </button>
        <button onClick={() => slideTo(7)} className={style.button}>
          2021
        </button>
        <button onClick={() => slideTo(9)} className={style.button}>
          2022
        </button>
      </p>
    </>
  )
}
