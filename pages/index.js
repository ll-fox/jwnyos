import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'
import HomeScroll from '../components/HomeScroll'
import AboutUs from '../components/AboutUs'
import styles from '../styles/Home.module.css'
import { data } from '../data'
import Testimonials from '../components/Testimonials'

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>金翁农业</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near Sweden"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Intro />
      <AboutUs />
      {/* {<Carousel />} */}
      <Banner />
      {/* <Services services={services} /> */}
      <ChooseUs />
      {/* <Testimonials /> */}
    </div>
  )
}

export const getStaticProps = () => {
  const services = data
  return {
    props: { services }
  }
}
