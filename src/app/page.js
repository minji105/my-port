/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.about}>
        <h1>안녕하세요.<br />
          프론트엔드 개발자 조민지입니다.</h1>

        <span>사용자 경험을 최우선으로 고려하며, 보다 편리하고
          즐거운 웹 환경을 제공하는 데 집중합니다.<br />
          직관적이면서도 반응성이 뛰어난 웹을 구현하는 프론트엔드 개발자되기 위해 노력하고 있으며,<br />
          항상 사용자가 쉽게 접근할 수 있는 인터페이스를 만드는 것을
          목표로 하고 있습니다.</span>

        <div className={styles.icons}>
          <img src="/images/icons/git.png" alt="" />
          <img src="/images/icons/mail.png" alt="" />
        </div>
      </div>

      <div className={styles.container}>
        <span>Tech Stack</span>

        <div className={styles.stack}>
          <div>
            <p>Mainly Used</p>
            <p>React</p>
            <p>Next.js</p>
            <p>Javascript</p>
            <p>HTML / CSS</p>
            <p>SCSS</p>
            <p>Node.js</p>
            <p>MongoDB</p>
          </div>
          <div>
            <p>Have experimented</p>
            <p>Vue</p>
            <p>Three.js</p>
            <p>GSAP</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <span>Education</span>

        <div>
          <p>울산대학교 IT융합학과 졸업 (24.02)</p>
        </div>
      </div>

      <div className={styles.container}>
        <span>Experience</span>

        <div>
          <p>[교내] 글로컬 메타버스 DT 인력양성과정 최우수상 (23.12)</p>
          <p>[네이버커넥트] 소프트웨어야 놀자 대학생 멘토 (22.05 ~ 22.12)</p>
        </div>
      </div>

      <div className={styles.container}>
        <span>Certifications</span>

        <div>
          <p>SQLD (24.04)</p>
          <p>ADsP (24.03)</p>
          <p>정보처리기사 (23.11)</p>
        </div>
      </div>
    </>
  );
}
