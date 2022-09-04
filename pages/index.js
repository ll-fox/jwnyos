import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Banner from '../components/Banner'
import HomeScroll from '../components/HomeScroll'
import Carousel from '../components/Carousel'
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
      </Head>
      <Intro />
      {/* <HomeScroll /> */}
      {/* {<Carousel />} */}
      <Banner />
      <Services services={services} />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = () => {
  const services = data
  return {
    props: { services }
  }
}
