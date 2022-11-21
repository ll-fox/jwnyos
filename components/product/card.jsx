import style from '../../styles/product/card.module.css'
import Image from 'next/image'
import { Tooltip } from 'antd'

const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.img}>
          <Image src="/img/card1.jpeg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={style.title}>幸运柿你</div>
        <div className={style.specification}>富平柿饼1000g</div>
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
          <div className={style.btn}>购买</div>
        </Tooltip>
      </div>
      <div className={style.item}>
        <div className={style.img}>
          <Image src="/img/card2.jpeg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={style.title}>幸运柿你</div>
        <div className={style.specification}>富平柿饼1000g</div>
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
          <div className={style.btn}>购买</div>
        </Tooltip>
      </div>
      <div className={style.item}>
        <div className={style.img}>
          <Image src="/img/card3.jpeg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={style.title}>旭日东升</div>
        <div className={style.specification}>富平柿饼1000g</div>
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
          <div className={style.btn}>购买</div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Card
