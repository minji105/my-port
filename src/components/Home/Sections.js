import React, { useState } from 'react';
import styles from './Sections.module.scss';
import Skills from './Skills';
import Resume from './Resume';
import projectList from '../../data/projectList.json';

export default function Sections() {
  const last_index = projectList.length - 1;

  const [projectImg, setProjectImg] = useState(projectList[0].hover);
  const [selectedRow, setSelectedRow] = useState(0);

  const handleClick = (index, img) => {
    setProjectImg(img);
    setSelectedRow(index);
  }

  return (
    <div className={styles.container}>
      <section>
        <h2>Skills</h2>

        <p className={styles.detail}>detail</p>

        <Skills />
      </section>

      {/* <section className={styles.resume}>
        <h2>Resume</h2>

        <p className={styles.pdf}>download (.pdf)</p>

        <Resume />
      </section> */}

      <section>
        <h2>Project</h2>

        <div className={styles.project}>
          <div>
            {projectList.map((project, index) => (
              <div
                key={index}
                className={`${styles.row} ${selectedRow === index ? styles.selected : ''}`}
                onClick={() => handleClick(index, project.hover)}>
                <p>{project.title}</p>
                <p>{project.category}</p>
              </div>
            ))}
          </div>
          <div className={styles.projectDetail}>
            <img src={projectImg} alt="project img" />
            <div className={styles.viewIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" width="20px">
                <path stroke="#000" stroke-width="2" d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m12-8v12m6-6H7"></path>
              </svg>
              <p>view the project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}