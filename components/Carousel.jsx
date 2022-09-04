import { Carousel } from 'antd'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'
import React from 'react'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App = () => (
  <Carousel autoplay>
    <div className={styles.item}>
      <Image src="/img/logo.png" layout="fill" objectFit="cover" alt="" />
    </div>
    <div className={styles.item}>
      <Image
        src="/img/production.jpeg"
        layout="fill"
        objectFit="cover"
        alt=""
      />
    </div>
    <div className={styles.item}>
      <Image src="/img/slid1.jpg" layout="fill" objectFit="cover" alt="" />
    </div>
  </Carousel>
)

export default App
