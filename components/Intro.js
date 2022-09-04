import style from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>金翁农业</span> 科技 有限公司
        </h1>
        <p className={style.desc}>
          坐落于西北，一家致力于打造农产品供应链的公司<br></br>
          出生于西北，一群致力于建设家乡的人
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image src="/img/Avocado.png" layout="fill" objectFit="cover" alt="" />
      </div>
    </div>
  )
}

export default Intro
