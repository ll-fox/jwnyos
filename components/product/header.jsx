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
          <br />
          何当携尔曹，绕树亲寻摘
        </div>
      </div>
      <div className={style.card}>
        <h1 className={style.title}>富平柿饼</h1>
        <div className={style.across}></div>
        <p className={style.text}>金翁农业科技有限公司位于富平县曹村镇太白村</p>
        <p className={style.text}>
          曹村镇地处陕西省渭南市富平县中北部桥山山脉南麓，这里光照充足、降雨充沛，农业资源丰富。
          <br />
          全镇林果覆盖率达到90%以上，种植花椒、核桃、石榴、曹杏等杂果近4万亩，而主导产业柿子种植面积达4.2万亩，素有“中国柿乡”之称
          <br />
        </p>
        <p className={style.text}>
          <br />
          而“吊柿饼”是陕西富平县的传统。成熟的柿饼经过晾晒，一排排整齐地从架上垂挂下来，如一面面橘黄色珠帘，弥漫着淡淡果香。富平柿饼有四个特点，即甜、软、糯、无核。柿饼肉多霜厚，入口即化，甜美入心。
        </p>
      </div>
    </div>
  )
}

export default Header
