import style from '../../styles/product/card.module.css'
import Image from 'next/image'
import { Tooltip } from 'antd'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.img}>
          <Image
            src="/img/tiangua1.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={style.title}>阎良甜瓜</div>
        <div className={style.specification}>4.7-5.2斤</div>
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
      <div className={style.item}>
        <div className={style.img}>
          <Image
            src="/img/tiangua2.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={style.title}>阎良甜瓜</div>
        <div className={style.specification}>4.7-5.2斤</div>
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
      <div className={style.item}>
        <div className={style.img}>
          <Image
            src="/img/tiangua3.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={style.title}>阎良甜瓜</div>
        <div className={style.specification}>2.5-3斤</div>
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
      <div className={style.item}>
        <div className={style.img}>
          <Image src="/img/card1.jpeg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={style.title}>用心做好柿</div>
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
          <Image
            src="/img/shibing1.jpeg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={style.title}>万事如意</div>
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
