import React, { useRef, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import style from '../styles/AdsModal.module.css'



function AdsModal(props) {
  const { visible = false, title, children, footer } = props
  const ref = useRef()
  useEffect(() => {
    // 设置属性id
    let divDialog = document.createElement('div')
    divDialog.setAttribute('id', 'dialog')
    divDialog.setAttribute('class', 'dialog')
    document.body.append(divDialog)
  }, [])

  return (
    <>
      {visible && (

            <div ref={ref} className={style['H-Dialog-overview']}>
            <div className={style['H-Dialog-inner']}>
                <div className={style['dialog-header']}>
                <h3>{title}</h3>
                </div>
                <Link
                    target="_blank"
                    href="https://shop308693260.taobao.com/index.htm?spm=a1z10.1-c.w5002-24669166804.2.3e7b68c4xSF0g8"
                    >
                    <a target="_blank">
                    <div className={style['dialog-body']}>{children}</div>
                    </a>          
                </Link>
                <div className={style['dialog-footer']}>
                {footer}
                </div>
            </div>
            </div>    

      )}
    </>
  )
}

export default AdsModal
