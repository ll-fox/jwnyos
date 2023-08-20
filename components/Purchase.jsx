import style from '../styles/Purchase.module.css'
import Image from 'next/image'

const Purchase = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Image
          src="/favicon.ico"
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className={style.purchase}>购买渠道</div>
      <div className={style.imgContent}>
        <div className={style.img}>
          <div>
            <Image
              src="/img/taobao.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div className={style.text}>拼多多</div>
        </div>
        <div className={style.img}>
          <div>
            <Image
              src="/img/pin.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div className={style.text}>淘宝</div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
