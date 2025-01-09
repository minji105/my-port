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
          완성에서 그치지 않고 완성 후에도 더 효율적으로 작성할 수는 없는지, 더 개선할 부분은 없는지 끊임없이 고민합니다.<br/>
          웹 접근성과 성능을 고려하며 개발하며 openWax, Lighthouse 등의 개발도구를 활용합니다.
        </p>

        <div className={styles.links}>
          <div>
            <Link href="https://github.com/minji105">Github</Link>
          </div>
          <p className={styles.updated}>Last Updated
            <span className={styles.updatedDate}>25.01.09</span>
          </p>
        </div>

        <Sections />
      </div>
    </>
  )
}