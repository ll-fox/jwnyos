import Carousel from '../components/Carousel'
import Image from 'next/image'
import styles from '../styles/Introduction.module.css'

const Introduction = () => {
  return (
    <div>
      <div>{<Carousel />}</div>
      <div className={styles.welcome}>
        <div className={styles.container}>
          <h1 className={styles.hdng}>Welcome</h1>
          <p>
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod{' '}
          </p>
          <div className={styles.welcomeInfo}>
            <div className={styles.welcomeGrids}>
              {/* <Image
                src="/img/slid.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              /> */}
            </div>
            <div className={styles.welcomeGrids}>
              {/* <Image
                src="/img/slid.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              /> */}
            </div>
            <div className={styles.clearfix}> </div>
          </div>
          <p>
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus omnis optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus.Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
