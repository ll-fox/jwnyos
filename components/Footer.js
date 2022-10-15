import style from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>欢迎联系我们.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>PLEASE CONTACT US</span>
              <Image src="/img/link.png" width="35px" height="35px" alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          <Image src="/img/cho7.png" width="35px" height="35px" alt="" />
          <span className={style.linkText}>15829000737</span>
        </div>
        <div className={style.cardItem}>
          <Image src="/img/cho8.png" width="35px" height="35px" alt="" />
          <span className={style.linkText}>
            陕西省渭南市富平县曹村镇太白村一组
          </span>
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          <Image src="/img/cho9.png" width="35px" height="35px" alt="" />
          <span className={style.linkText}>yangyifan@jwny.onmicrosoft.com</span>
        </div>
        <div className={style.cardItem}>
          <Image src="/img/cho10.png" width="35px" height="35px" alt="" />
          <span className={style.linkText}>https://jwny.xyz</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
