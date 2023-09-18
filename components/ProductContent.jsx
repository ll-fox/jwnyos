import { Map, Marker } from 'react-amap'
import style from '../styles/ProductContent.module.css'
import Footer from './Footer'
import Image from 'next/image'

const ProductContent = () => {
  return (
    <>
      <div className={style.containerBg}>
        <Image src="/img/pcb.png" layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={style.overlay}></div>
      <div className={style.container}>
        <div className={style.title}>
          产品布局
          <span className={style.etitle}> product distribution</span>
        </div>
        <div className={style.content}>
          <div className={style.text}>
            除富平柿饼外，近两年我们积极对其他品类进行拓展，并取得了极大的成功，取得了不错的销售额。我们致力于深入产地，严格把控产品质量，为线下，以及线上用户提供最优质地服务。
          </div>
          <div className={style.chart}>
            <Image src="/img/tb.png" layout="fill" objectFit="contain" alt="" />
            <div className={style.sell}>2022年销售额</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductContent
