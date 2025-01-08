import styles from '../styling/Project.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function Museum() {
  const project = projectList[0];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://minji105.github.io/Milwaukee-Art-Museum-Clone/" target="_blank">Visit Site</Link>
          <Link href="https://github.com/minji105/Milwaukee-Art-Museum-Clone" target="_blank">Github</Link>
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
            Milwaukee Art Museum 페이지 클론코딩입니다.<br/>
            현재 제작중입니다.
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
        </div>
      </div>
    </>
  )
}