import style from '../styles/AboutUs.module.css'
import Image from 'next/image'
import Circle from './Circle'
import Link from 'next/link'

const AboutUs = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.pic}>
        <Image src="/img/9303.jpg" layout="fill" objectFit="cover" alt="" />
        <div className={style.logo}>
          <Image src="/img/logo.png" layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <div className={style.title}>
        <span className={style.since}>since</span>
        <span className={style.time}>2018</span>
      </div>
      <div className={style.subtitle}>
        <p className={style.p1}>金翁农业科技有限公司</p>
        <p className={style.p2}>Jinweng Agricultural Technology Co., Ltd</p>
        <p className={style.p3}>
          富平县金翁农业科技有限公司成立于2018年，依托当地特有的富平尖柿种植为基础、利用传统工艺和现代化先进技术相结合来加工富平柿饼及柿饼深加工产品。
        </p>
        <div className={style.btn}>了解更多</div>
      </div>
    </div>
  )
}

export default AboutUs
