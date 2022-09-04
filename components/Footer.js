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
          联系电话：
          <br /> 123456789000
        </div>
        <div className={style.cardItem}>
          邮箱：
          <br /> 1111111111@incloud.com
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          小红书:
          <br /> 11111111
        </div>
        <div className={style.cardItem}>
          © 2022 JWNY COMPANY,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer
