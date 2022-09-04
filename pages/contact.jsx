import Circle from '../components/Circle'
import style from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={style.container}>
      <Circle
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
      />
      <h1 className={style.title}>请留下您的信息</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="姓名" />
        <input className={style.inputS} type="text" placeholder="手机号" />
        <input className={style.inputL} type="text" placeholder="邮箱" />
        <input className={style.inputL} type="text" placeholder="公司" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="留言"
        />
        <button className={style.button}>提交</button>
      </form>
    </div>
  )
}

export default Contact
