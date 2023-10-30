import style from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from 'antd'

const Footer = () => {
  return (
    <div className={style.container}>
      <Link href="/">
        <div className={style.logo}>
          <Image src="/img/logo.png" layout="fill" objectFit="cover" alt="" />
        </div>
      </Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">首页</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/introduction">公司简介</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/production">产品介绍</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/photography">公司规划</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">联系我们</Link>
        </li>
      </ul>
      <div className={style.title}>
        Fu Ping County JinWeng Agricultural Technology Co.,LTD
      </div>
      <div className={`${style.title} ${style.recordNumber}`}>
        <Link href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">
          <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" rel="noreferrer">
            陕ICP备2023013467号
          </a>
        </Link>
      </div>
      <div className={style.infoIcon}>
        <Tooltip title="15829000737">
          <Image src="/img/cho7.png" width="35px" height="35px" alt="" />
        </Tooltip>
        <Tooltip title="陕西省渭南市富平县曹村镇太白村一组">
          <Image src="/img/cho8.png" width="35px" height="35px" alt="" />
        </Tooltip>
        <Tooltip title="yangyifan@jwny.onmicrosoft.com">
          <Image src="/img/cho9.png" width="35px" height="35px" alt="" />
        </Tooltip>
        <Tooltip title="https://jwny.xyz">
          <Image src="/img/cho10.png" width="35px" height="35px" alt="" />
        </Tooltip>
      </div>
    </div>
  )
}

export default Footer
