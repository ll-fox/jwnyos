import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const { pathname, asPath } = useRouter()

  return (
    <div className={styles.container}>
      <>
        <Navbar />
        {children}
        {asPath !== '/' && <Footer />}
      </>
    </div>
  )
}

export default Layout
