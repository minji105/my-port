import styles from './Skill.module.scss';

export default function Sections() {
  return (
    <div className={styles.skills}>
      <div className={styles.row}>
        <p className={styles.rowName}>Frontend</p>
        <div className={styles.items}>
          <ul>
            <li>
              <span className={styles.skillName}>HTML</span>&nbsp;&nbsp;
                웹 페이지 구조를 설계하고 시멘틱 태그를 활용해 SEO를 고려한 마크업 작성
            </li>
            <li>
              <span className={styles.skillName}>CSS / Sass</span>&nbsp;&nbsp;
반응형 웹 페이지 구현, CSS 전처리기를 사용하여 효율적인 스타일링과 코드 재사용성 향상
            </li>
            <li>
              <span className={styles.skillName}>React.js</span>&nbsp;&nbsp;
              컴포넌트 기반, 리액트 훅을 사용하여 개발
            </li>
            <li>
              <span className={styles.skillName}>Next.js</span>&nbsp;&nbsp;
SEO 최적화, API 라우트 기능 활용
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.row}  ${styles.after}`}>
        <p className={styles.rowName}>Backend</p>
        <div className={styles.items}>
          <ul>
            <li><span className={styles.skillName}>Node.js / Express.js</span>&nbsp;&nbsp;
            REST API를 설계하고 구현하여 클라이언트와 데이터를 주고받는 구조를 개발
            </li>
            <li><span className={styles.skillName}>MongoDB</span>&nbsp;&nbsp;
            NoSQL 데이터베이스를 활용하여 데이터 모델을 설계
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}