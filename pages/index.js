import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import HomeScroll from '../components/HomeScroll'
import AboutUs from '../components/AboutUs'
import AdsModal from '../components/AdsModal'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({ services }) {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Intro />
      <AboutUs />
      {/* {<Carousel />} */}
      <Banner />
      {/* <Services services={services} /> */}
      <ChooseUs />
      {/* <Testimonials /> */}
      <AdsModal
        visible={visible}
        title={
          <>
            <button
              onClick={() => {
                setVisible(false)
              }}
            >
              确定
            </button>
          </>
        }
        // eslint-disable-next-line react/no-children-prop
        children={
          <Image src="/img/ads.png" layout="fill" objectFit="cover" alt="" />
        }
        footer={
          <>
            <button
              onClick={() => {
                setVisible(false)
              }}
            >
              关闭
            </button>
          </>
        }
      ></AdsModal>
    </div>
  )
}

export const getStaticProps = () => {
  const services = data
  return {
    props: { services }
  }
}
