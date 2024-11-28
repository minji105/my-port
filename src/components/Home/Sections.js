import React from 'react';
import styles from './Sections.module.scss';
import Skills from './Skills';
import Project from './Project';

export default function Sections() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.sectionTitle}>
          <h2>Skills</h2>
          <p>detail</p>
        </div>

        <Skills />
      </section>

      <section>
        <div className={styles.sectionTitle}>
          <h2>Education</h2>
          <p className={styles.pdf}>download (.pdf)</p>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2024.02</p>
            <p className={styles.resumeTitle}>울산대학교 IT융합학과 졸업</p>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sectionTitle}>
          <h2>Experience</h2>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2023.09 ~ 2023.12</p>
            <p className={styles.resumeTitle}>글로컬 메타버스 DT 인력양성과정</p>
            <p className={styles.date}>울산대학교</p>
          </div>
          <p className={styles.explain}>
            2인으로 팀을 이루어 메타버스 기반 비대면 호텔 플레이스를 만들었고 <u>최우수상</u>을 수상했습니다.<br />
            메타버스는 각자 구역을 담당하여 제작하였으며 그 외에 저는 호텔 예약 서비스 제작 및 ppt 제작을 담당했습니다.
          </p>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2022.05 ~ 2022.12</p>
            <p className={styles.resumeTitle}>소프트웨어야 놀자 대학생 멘토</p>
            <p className={styles.date}>네이버 커넥트재단</p>
          </div>
          <p className={styles.explain}>
            5인 팀으로 소프트웨어 교육 봉사를 하였습니다.<br />
            총 6개의 초등학교에서 멘토링을 진행하였으며 저는 인공지능 윤리 수업과 sns 홍보를 담당했습니다.
          </p>
        </div>
      </section>

      <section>
        <div className={styles.sectionTitle}>
          <h2>Certificate</h2>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2024.04</p>
            <p className={styles.resumeTitle}>SQLD</p>
          </div>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2024.03</p>
            <p className={styles.resumeTitle}>ADsP</p>
          </div>
        </div>

        <div className={styles.resume}>
          <div>
            <p className={styles.date}>2023.11</p>
            <p className={styles.resumeTitle}>정보처리기사</p>
          </div>
        </div>
      </section>

      <section id='project-section'>
        <div className={styles.sectionTitle}>
          <h2>Project</h2>
        </div>

        <Project />
      </section>
    </div>
  )
}