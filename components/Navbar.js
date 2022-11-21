import { useState, useRef, useEffect, useContext } from 'react'
import MyContext from '../lib/context'
import { useRouter } from 'next/router'

import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { tab, setTab } = useContext(MyContext)
  const { pathname, asPath } = useRouter()
  let changeNav_box = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })
  let handleScroll = function () {
    const scrollY = window.scrollY
    if (asPath !== '/') {
      changeNav_box.current.style.color = '#c49b45'
      changeNav_box.current.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    } else {
      const opa = String(`rgba(255, 255, 255, ${(scrollY || 0) / 80})`)
      changeNav_box.current.style.backgroundColor = opa
      if (scrollY > 80) {
        changeNav_box.current.style.color = '#c49b45'
      } else {
        changeNav_box.current.style.color = '#fff'
      }
    }
  }
  return (
    <div ref={changeNav_box} className={style.container}>
      <Link href="/">
        <div className={style.logo}>
          <Image src="/img/logo.png" layout="fill" objectFit="cover" alt="" />
        </div>
      </Link>
      <ul className={style.list}>
        <li className={`${style.listItem} ${pathname === '/' && style.select}`}>
          <Link href="/">首页</Link>
        </li>
        <li
          className={`${style.listItem} ${
            pathname === '/introduction' && style.select
          }`}
        >
          <Link href="/introduction">公司简介</Link>
        </li>
        <li
          className={`${style.listItem} ${
            pathname === '/product' && style.select
          }`}
        >
          <Link href="/product">产品介绍</Link>
        </li>
        {/* <li
          className={`${style.listItem} ${
            pathname === '/products/photography' && style.select
          }`}
        >
          <Link href="/products/photography">公司规划</Link>
        </li> */}
        <li
          className={`${style.listItem} ${
            pathname === '/contact' && style.select
          }`}
        >
          <Link href="/contact">联系我们</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={style.menu}
        style={{ right: open ? '0px' : '-50vw' }}
      >
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
