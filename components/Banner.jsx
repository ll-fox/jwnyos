import styles from '../styles/Banner.module.css'
const Banner = () => {
  return (
    <div className={styles.bannerBottom}>
      <div className={styles.container}>
        <div className={`${styles.colmd4} ${styles.bannerbottomgrids}`}>
          <h2>关于我们</h2>
        </div>
        <div className={`${styles.colmd4} ${styles.bannerbottomgrids}`}>
          <h4>我们是谁？</h4>
          <p>
            富平县金翁农业科技有限公司成立于2018年，前身是富平县农乐柿子种植合作社，富平农乐柿子种植专业合作社成立于2011年，位于中国柿乡名镇曹村镇，是依托当地特有的富平尖柿种植为基础、利用传统工艺和现代化先进技术相结合来加工富平柿饼及柿饼深加工产品。目前公司国内市场销售和网络销售体系健全、公司拥有出口资质，IS09001体系认证,食品生产许可。从2011年至今，十余年的砥砺前行,起于专注,积于恒心,以规模化、集约化、科学化、标准化为经营模式,以消费者能享受到纯天然的富平柿饼美味为愿景,团结引领当地农户大力发展特色产业.
          </p>
        </div>
        <div className={`${styles.colmd4} ${styles.bannerbottomgrids}`}>
          <h4>我们的目标是什么？</h4>
          <p>
            根据公司的战略构想，柿饼产业将作为本公司的主产业，在此基础上公司已经结合自身产业优势及周边环境适时、适机对所涉及的产业实现扩展，最终实现以点带面全民带动形成合力的战略目标。以带动地方经济、助力地方经济发展，实现乡村振兴的宏大目标作为开拓进取的动力。
          </p>
        </div>
        <div className={styles.clearfix}> </div>
      </div>
    </div>
  )
}

export default Banner
