import React, { useRef, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Modal.module.css'

function Modal(props) {
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
            <div ref={ref} className={styles['H-Dialog-overview']}>
            <div className={styles['H-Dialog-inner']}>
                <div className={styles['dialog-header']}>
                <h3>{title}</h3>
                </div>
                <Link
                    target="_blank"
                    href="https://shop308693260.taobao.com/index.htm?spm=a1z10.1-c.w5002-24669166804.2.3e7b68c4xSF0g8"
                    >
                    <a target="_blank">
                    <div className={styles['dialog-body']}>{children}</div>
                    </a>          
                </Link>
                <div className={styles['dialog-footer']}>
                {footer}
                </div>
            </div>
            </div>    

      )}
    </>
  )
}

export default Modal
