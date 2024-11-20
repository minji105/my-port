import styles from './Sections.module.scss';

export default function Sections() {
  return (
    <div className={styles.skillTable}>
      <div className={styles.row}>
        <div className={styles.rowName}>Frontend</div>
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
        <div className={styles.rowName}>Backend</div>
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
        <div className={styles.rowName}>Tool</div>
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
  )
}