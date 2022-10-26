import Carousel from '../components/Carousel'
import Image from 'next/image'
import styles from '../styles/Introduction.module.css'

const Introduction = () => {
  return (
    <div>
      <div className={styles.carousel}>{<Carousel />}</div>
      <div className={styles.welcome}>
        <div className={styles.container}>
          <h1 className={styles.h1}>富平县金翁农业科技有限公司</h1>
          <p>Fu Ping County JinWeng Agricultural Technology Co.,LTD </p>
          <div className={styles.welcomeInfo}>
            <div className={styles.welcomeGrids}>
              <Image src="/img/3.jpg" layout="fill" objectFit="cover" alt="" />
            </div>
            <div className={styles.welcomeGrids}>
              <Image src="/img/bg.png" layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
          <p
            style={{
              color: 'rgb(121 118 118)',
              fontFamily: 'Yuanti SC'
            }}
          >
            富平县金金农业科技有限公司成立于 2018年 <br />
            前身是富平县农乐柿子种植合作社，富平农乐柿子种植专业合 作社成立于
            2011年
            <br />
            位于中国柿乡名镇曹村镇，是依托当地特有的富平尖柿种植为基础、利用传统工艺和现代化
            先进技术相结合来加工富平柿饼及柿饼深加工产品。{' '}
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.work}>
          <div className={styles.workImg}>
            <Image src="/img/2.jpg" layout="fill" objectFit="cover" alt="" />
          </div>
          <div className={styles.workGrids}>
            <h3>What We Do ?</h3>
            <p>
              以消费者能享受到纯天然的富平柿饼美味为愿景，团结引领当地农户大力发展
              特色产业,推动农民增收,产业增效，农村振兴．公司成立以来，始终坚持“以人为本，科技创新，绿色环保，诚
              信、惠民的企业宗旨，取得了较好的社会效益和经济效益
            </p>
            <ul>
              <li>
                <span>{'>'}</span>
                <a href="#">
                  连年出口韩国、泰国及东南亚各国，为知名超
                  市、卖场连锁店提供稳定货源
                </a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">
                  以富平柿饼为主产业线，通过市场为导向，相继完成柿树科学化种
                  植，并拟扩大柿饼加工生产线
                </a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">经打造了一个较为完整的衣业供应链科技管理有限公司</a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">
                  以带动地方经济、助
                  力地方经济发展，实现乡村振兴的宏大目标作为开拓进取的动力
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.work}>
          <div className={styles.workGrids}>
            <h3>Why You Choose Us ?</h3>
            <p>
              从 2011年至今，十余年的砥砺前行，起于专注，积于恒心，以规模化、集
              约化、科学化、标准化为经营模式{' '}
            </p>
            <ul>
              <li>
                <span>{'>'}</span>
                <a href="#">公司拥有出口资质</a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">ISO90O1 体系认证</a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">食品生产许可</a>
              </li>
              <li>
                <span>{'>'}</span>
                <a href="#">规模化、集 约化、科学化、标准化为经营模式</a>
              </li>
            </ul>
          </div>
          <div className={styles.workImg}>
            <Image
              src="/img/user2.jpeg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
