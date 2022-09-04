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
            我们是来一家来自西北地区（陕西省渭南市富平县曹村镇）的农产品供应链公司，致力于将家乡的的农产品带入到千家万户，以建设家乡为己任，振兴乡村，为内循环的打造贡献出自己应有的力量
          </p>
        </div>
        <div className={`${styles.colmd4} ${styles.bannerbottomgrids}`}>
          <h4>我们的目标是什么？</h4>
          <p>
            我们是来一家来自西北地区（陕西省渭南市富平县曹村镇）的农产品供应链公司，致力于将家乡的的农产品带入到千家万户，以建设家乡为己任，振兴乡村，为内循环的打造贡献出自己应有的力量
          </p>
        </div>
        <div className={styles.clearfix}> </div>
      </div>
    </div>
  )
}

export default Banner
