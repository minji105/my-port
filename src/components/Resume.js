import styles from './Resume.module.scss';

export default function Resume() {
  return (
    <div className={styles.container}>
      <section>
        <h2>Skills</h2>

        <p className={styles.detail}>detail</p>

        <div className={styles.skillTable}>
          <div className={styles.row}>
            <div className={styles.colName}>Frontend</div>
            <div className={styles.cell}>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className={styles.cell}>
              <ul>
                <li>HTML / CSS / JS</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.colName}>Backend</div>
            <div className={styles.cell}>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className={styles.cell}>
              <ul>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.row}  ${styles.after}`}>
            <div className={styles.colName}>Tool</div>
            <div className={styles.cell}>
              <ul>
                <li>Git / Github</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className={styles.cell}>
              <ul>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.resume}>
        <h2>Resume</h2>

        <p className={styles.pdf}>download (.pdf)</p>

        <div className={styles.row}>
          <div className={styles.colName}>
            <p>Education</p>
          </div>
          <div>
            <p><p className={styles.date}>2024.02</p>울산대학교 IT융합합과 졸업</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colName}>
            <p>Certificate</p>
          </div>
          <div>
            <p><p className={styles.date}>2024.04</p>SQLD</p>
            <p><p className={styles.date}>2024.03</p>ADsP</p>
            <p><p className={styles.date}>2023.11</p>정보처리기사</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colName}>
            <p>Experience</p>
          </div>
          <div>
            <p><p className={styles.date}>2023.12</p>[교내] 글로컬 메타버스 DT 인력양성과정 최우수상</p>
            <p><p className={styles.date}>2022.05 ~ 12</p>[네이버커넥트] 소프트웨어야 놀자 대학생 멘토</p>
          </div>
        </div>


      </section>
    </div>
  )
}