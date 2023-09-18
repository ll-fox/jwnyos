import Circle from '../components/Circle'
import style from '../styles/Contact.module.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={style.container} >
      {/* <Circle
        backgroundColor="black"
        left="-40vh"
        top="-20vh"
        className={style.circle}
      />
      <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      /> */}
      <h1 className={style.title}>感谢您选择金翁农业</h1>
      <form className={style.form}>
        {/* <input className={style.inputS} type="text" placeholder="姓名" />
        <input className={style.inputS} type="text" placeholder="手机号" />
        <input className={style.inputL} type="text" placeholder="邮箱" />
        <input className={style.inputL} type="text" placeholder="公司" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="留言"
        />
        <button className={style.button}>提交</button> */}
        <button className={style.button}>
          <Link href="/userInfo">如需合作，请留下您的信息</Link>
        </button>
        <Link href="/price-sheet">
          <button className={style.button}>提价交您的报价信息</button>
        </Link>
      </form>
    </div>
  )
}

export default Contact
