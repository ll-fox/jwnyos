import style from '../../styles/product/card.module.less'
import Image from 'next/image'
import { Tooltip } from 'antd'
import Link from 'next/link'

const Card = () => {
  const productList = [
    {
      url: '/img/9303.jpg',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤阎良甜瓜'
    },
    {
      url: '/img/ygmg.png',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤阎良甜瓜'
    },
    {
      url: '/img/9303.jpg',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤阎良甜瓜'
    },
    {
      url: '/img/tiangua1.png',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤'
    },
    {
      url: '/img/tiangua1.png',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤'
    },
    {
      url: '/img/tiangua1.png',
      title: '阎良甜瓜',
      specification: '4.7-5.2斤'
    }
  ]
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>优质鲜果</h2>
        <p>我们提供了多种鲜果，供您选择</p>
      </div>
      <div className={style.content}>
        {productList.map((item, index) => (
          <div className={style.item} key={index}>
            <div className={style.img}>
              <Image src={item.url} layout="fill" objectFit="cover" alt="" />
            </div>
            <div className={style.title}>{item.title}</div>
            <div className={style.specification}>{item.specification}</div>
            <Tooltip
              title={
                <Image
                  src="/img/process7.jpeg"
                  width="150px"
                  height="175px"
                  alt=""
                />
              }
            >
              <Link
                target="_blank"
                href="https://shop308693260.taobao.com/index.htm?spm=a1z10.1-c.w5002-24669166804.2.3e7b68c4xSF0g8"
              >
                <a target="_blank">
                  <div className={style.btn}>购买</div>
                </a>
              </Link>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
