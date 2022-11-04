import style from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.pic1} />
      <div className={style.pic2} />
      <div className={style.pic3} />
      <div className={style.pic4} />
      <div className={style.text}>
        善为至宝， 一生用之不尽
        <br />
        心作良田， 百世耕之有余
      </div>
      {/* <Circle top="0" left="45vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>金翁农业</span> 科技有限公司
        </h1>
        <div className={style.head}></div>

        {/* <button className={style.button}>DISCOVER</button> */}
      </div>
      <div className={style.desc}>利而不害 为而不争</div>
      <div className={style.card}>
        {/* <Image src="/img/zao.png" layout="fill" objectFit="cover" alt="" /> */}
      </div>
    </div>
  )
}

export default Intro
