import style from '../styles/AboutUs.module.css'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>关于我们</h1>
        <div className={style.across}></div>
        <div className={style.pic}>
          <Image
            src="/img/about-us.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <h1 className={style.subtitle}>
          富平县金翁农业科技有限公司成立于2018年
          <br />
          前身是富平县农乐柿子种植合作社，富平农乐柿子种植专业合作社成立于2011年
          <br />
          位于中国柿乡名镇曹村镇，是依托当地特有的富平尖柿种植为基础、利用传统工艺和现代化先进技术相结合来加工富平柿饼及柿饼深加工产品。
        </h1>
      </div>
    </div>
  )
}

export default AboutUs
