import styles from '../styling/Project.module.scss';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function HandTracking() {
  const project = projectList[6];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="/images/handTracking/handtracking-ppt.pdf" target="_blank">PPT</Link>
        </div>
        <section>
        <div className={styles.left}>
            <div className={styles.info}>
              <ul>
                <li>
                  <p>Type</p>
                  <p>{project.type} project</p>
                </li>
                <li>
                  <p>Date</p>
                  <p>{project.date}</p>
                </li>
                <li>
                  <p>Role</p>
                  <p>{project.role}</p>
                </li>
                <li>
                  <p>Skill</p>
                  <div>
                    {project.stack.map((item, index) => (
                      <span className={styles.skillName}>{item}</span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <p>
              전공과목 '증강현실과 가상현실'의 텀 프로젝트로 제작한 것입니다.<br />
              구글의 Mediapipe 프레임워크를 활용하여 웹캠으로 사용자의 손을 인식해
              별도의 컨트롤러 없이 가상현실 내에서 상호작용할 수 있습니다.
              인식된 손의 랜드마크 좌표를 실시간으로 추출하고 사용자 데이터그램 프로토콜(UDP)을
              이용하여 Unity로 전송합니다. Unity에서는 실시간으로 전송받은
              데이터를 기반으로 랜드마크 좌표에 오브젝트를 생성하여 손 모양을 나타냅니다.
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>
      </div>
    </>
  )
}