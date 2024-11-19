import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Resume from './Resume';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <h1>안녕하세요, 웹 개발자 조민지입니다.</h1>
          <p>Personal site & Portfolio</p>
        </header>

        <p className={styles.info}>
          E: ajhjmj9@naver.com<br />
          P: 010.2004.6582
        </p>

        <p>
          캡스톤 디자인을 진행하면서 웹 개발에 흥미를 갖게 되었고,
          졸업 후 프론트엔드를 집중적으로 공부하고 있습니다.
          <br />
          다양한 기술을 학습하고 적용하는 것에 열정을 가지고 있으며,
          이를 바탕으로 완성도 높은 웹 경험을 제공하는 개발자로 발전하는 것이 목표입니다.
          <br />
          깔끔하고 효율적인 코드를 지향하며 항상 더 나은 방법을 고민합니다.
          <br />
          두 번의 팀 프로젝트 경험을 통해 협업과 커뮤니케이션의 중요성을 배웠습니다.
        </p>

        <div className={styles.links}>
          <div>
            <Link to="https://dribbble.com/shots/popular/web-design">Github</Link>
            <Link to="https://dribbble.com/shots/popular/web-design">Instagram</Link>
            <Link to="https://codepen.io/aki-builder/collections/">CodePen</Link>
          </div>
          <p className={styles.updated}>Last Updated
            <span className={styles.updatedDate}>24.11.18</span>
          </p>
        </div>

        <Resume />
      </div>
    </>
  )
}