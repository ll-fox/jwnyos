import styles from '../styles/ChooseUs.module.css'
import Image from 'next/image'

const ChooseUs = () => {
  return (
    <div className={styles.choose}>
      <div className={styles.container}>
        <div className={`${styles.chooseTop}  ${styles.heading}`}>
          <h3>Why Choose Us</h3>
        </div>
        <div className={styles.chooseBottom}>
          <div className={styles.chooseBox}>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>完整、先进的管理体系和年轻的高素质运作团队</h4>
                <p>
                  Complete, advanced management system and young high-quality
                  team .
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho1.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>团队成员具有丰富的团队管理、美图美工、产地管理经验</h4>
                <p>
                  Team members have rich experience in team management, picture
                  beautification, production area management
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho2.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>团队成员具有丰富的团队管理、美图美工、产地管理经验</h4>
                <p>
                  Team members have rich experience in team management, picture
                  beautification, production area management
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho3.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>富平柿饼得天独厚的地理优势以及多年积累出的货物运输经验</h4>
                <p>
                  The geographical advantage of Fuping persimmon as well as the
                  cargo transportation experience accumulated for many years
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho4.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>
                  客服回复率100%，回复时间15s之内，我们具有高效优质的售后服务系统
                </h4>
                <p>
                  Customer service response rate is 100%, the reply time is
                  within 15s，we have high quality and efficient after-sales
                  service system.
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho5.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.chooseLeft}>
              <div className={styles.cLeft}>
                <h4>
                  品质至上，多个产品平均售后率不到0.5%，其中冬枣售后率仅有0.05%
                </h4>
                <p>
                  Quality first, the average after-sale rate of multiple
                  products is less than 0.5%, and the sales rate of Dongzao is
                  only 0.05%
                </p>
              </div>
              <div className={styles.cRight}>
                <Image
                  className={styles.avatar}
                  src={`/img/cho6.jpg`}
                  width="100"
                  height="100"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
