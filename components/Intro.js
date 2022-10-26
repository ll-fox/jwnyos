import style from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle top="0" left="45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>金翁农业</span> 科技有限公司
        </h1>
        <div className={style.head}></div>
        <p className={style.desc}>
          善为至宝， 一生用之不尽；心作良田， 百世耕之有余<br></br>
          企业宗旨：利而不害 为而不争
        </p>
        {/* <button className={style.button}>DISCOVER</button> */}
      </div>
      <div className={style.card}>
        {/* <Image src="/img/zao.png" layout="fill" objectFit="cover" alt="" /> */}
      </div>
    </div>
  )
}

export default Intro
