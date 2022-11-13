import style from '../styles/Intro.module.css'

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <Circle top="0" left="45vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>金翁农业科技有限公司</span>
          <br />
          <span className={style.littleName}>
            Fu Ping County JinWeng Agricultural Technology Co.,LTD
          </span>
          <br />
          <span className={style.slogan}>利而不害 为而不争 用心做好柿</span>
        </h1>
        <p></p>
      </div>
      <div className={style.floor}>
        <button className={style.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f4f4ec"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f4f4ec"
            strokeWidth="3.5"
            strokeLinecap="square"
            strokeLinejoin="arcs"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f4f4ec"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Intro
