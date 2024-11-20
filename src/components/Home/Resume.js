import styles from './Sections.module.scss';

export default function Sections() {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.rowName}>
          <p>Education</p>
        </div>
        <div>
          <p><p className={styles.date}>2024.02</p>울산대학교 IT융합합과 졸업</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowName}>
          <p>Certificate</p>
        </div>
        <div>
          <p><p className={styles.date}>2024.04</p>SQLD</p>
          <p><p className={styles.date}>2024.03</p>ADsP</p>
          <p><p className={styles.date}>2023.11</p>정보처리기사</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rowName}>
          <p>Experience</p>
        </div>
        <div>
          <p><p className={styles.date}>2023.12</p>[교내] 글로컬 메타버스 DT 인력양성과정 최우수상</p>
          <p><p className={styles.date}>2022.05 ~ 12</p>[네이버커넥트] 소프트웨어야 놀자 대학생 멘토</p>
        </div>
      </div>
    </>
  )
}