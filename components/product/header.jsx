import style from '../../styles/product/header.module.css'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.bgcont}>
        <div className={style.headerTitle}>
          《书事》
          <br />
          [宋] 赵蕃
          <br /> 儿童不知忧，度日长戏剧
          <br /> 忽传山中讯，欣喜沾柿栗 
          <br /> 为物虽甚微，贵是家所植
          <br />何当携尔曹，绕树亲寻摘
        </div>
      </div>
      <div className={style.card}>
        <h1 className={style.title}>富平柿饼</h1>
        <div className={style.across}></div>
        <p className={style.text}>
          富平柿饼，陕西省富平县特产，中国国家地理标志产品
        </p>
        <p className={style.text}>
          富平柿饼以当地生产的传统名优柿子品种“富平尖柿”为原料，经过清洗削皮、日晒压捏、捏晒整形、定型捂霜等多道工序精细制作而成。
          <br />
        </p>
        <p className={style.text}>
          “吊柿饼”是陕西富平县的传统。成熟的柿饼经过晾晒，一排排整齐地从架上垂挂下来，如一面面橘黄色珠帘，弥漫着淡淡果香。富平柿饼有四个特点，即甜、软、糯、无核。柿饼肉多霜厚，入口即化，甜美入心。
        </p>
      </div>
    </div>
  )
}

export default Header
