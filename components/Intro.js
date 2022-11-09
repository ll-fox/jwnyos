import style from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <Circle top="0" left="45vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>金翁农业科技有限公司</span>
          <br />
          <span className={style.littleName}>
            Fu Ping County JinWeng Agricultural Technology Co.,LTD
          </span>
          <br />
          <span className={style.slogan}>利而不害 为而不争 用心做好柿</span>
        </h1>
        <p></p>
      </div>
      <div className={style.floor}>
        <button className={style.button}> - - -</button>
      </div>
    </div>
  )
}

export default Intro
