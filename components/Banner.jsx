import Link from 'next/link'

import styles from '../styles/Banner.module.css'
const Banner = () => {
  return (
    <div className={styles.bannerBottom}>
      <div className={styles.container}>
        <div className={`${styles.colmd4} ${styles.bannerbottomgrids}`}>
          <h2>我们的目标</h2>
          <div className={styles.across}></div>
          <p>
            根据公司的战略构想，柿饼产业将作为本公司的主产业
            <br />
            在此基础上公司已经结合自身产业优势及周边环境适时、适机对所涉及的产业实现扩展，最终实现以点带面全民带动形成合力的战略目标。以带动地方经济、助力地方经济发展，实现乡村振兴的宏大目标作为开拓进取的动力。
          </p>
        </div>
        <div className={styles.btn}>
          <Link href="/product">
            <div className={styles.btn}>产品介绍</div>
          </Link>
        </div>
        <div className={styles.clearfix}> </div>
      </div>
    </div>
  )
}

export default Banner
