import styles from './styling/Home.module.scss';
import Link from 'next/link';
import Sections from '../components/Home/Sections';

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

        <p className={styles.introduce}>
          직관적인 UI 제공과 완성도 높은 웹을 제공하는 개발자가 되고자 노력하고 있습니다.<br/>
          깔끔하고 효율적인 코드를 지향하며 항상 개선하고 있습니다.<br/>
          협업에서 적극적인 의사소통의 중요성을 알고 있습니다.
        </p>

        <div className={styles.links}>
          <div>
            <Link href="https://github.com/minji105">Github</Link>
          </div>
          <p className={styles.updated}>Last Updated
            <span className={styles.updatedDate}>24.12.16</span>
          </p>
        </div>

        <Sections />
      </div>
    </>
  )
}