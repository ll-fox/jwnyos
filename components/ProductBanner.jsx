import { Map, Marker } from 'react-amap'
import style from '../styles/ProductBanner.module.css'
import Footer from './Footer'
import Image from 'next/image'

const ProductBanner = () => {
	const picList = [
    {
      path: '/img/4.jpg',
      text: ''
    },
    {
      path: '/img/9303.jpg',
      text: '2'
    },
    {
      path: '/img/mqmg.png',
      text: '0'
    },
    {
      path: '/img/csz.png',
      text: '2'
    },
    {
      path: '/img/ygmg.png',
      text: '3'
    },
    {
      path: '/img/yltg.png',
      text: ''
    }
  ]
  return (
    <div className={style.container}>
      <div className={style.bg}>
        {picList.map((item, index) => (
          <div key={index} className={style.bgItem}>
            <Image src={item.path} layout="fill" objectFit="cover" alt="" />
            <div className={style.text}>{item.text}</div>
          </div>
        ))}
      </div>
      <div className={style.overlay}></div>
      <div className={style.title}>
        金翁农业
        <br />
        鲜果荟
      </div>
      <div className={style.content}>
        <div className={style.h1}>产品类目 & product category</div>
        <div>
          公司依托当地特有的富平尖柿种植为基础，利用传统工艺和现代化先进技术来加工富平柿饼，2022年初金翁农业以规模优势、
          产地优势、渠道优势，开始对农产品生鲜类目开始全面进军。
        </div>
      </div>
    </div>
  )
}

export default ProductBanner
