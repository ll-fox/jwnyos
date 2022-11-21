import style from '../../styles/product/process.module.css'
import Image from 'next/image'

const Process = ({ title, content,index }) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Image src={`/img/process${index}.jpeg`} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={style.right}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.text}>{content}</p>
        <div className={style.across}></div>
      </div>
    </div>
  )
}

export default Process
