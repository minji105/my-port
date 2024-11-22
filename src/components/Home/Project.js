import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sections.module.scss';
import projectList from '../../data/projectList.json';

export default function Sections() {

  const [projectImg, setProjectImg] = useState(projectList[0].main);
  const [projectStack, setProjectStack] = useState(projectList[0].stack);
  const [projectUrl, setProjectUrl] = useState(projectList[0].url);
  const [selectedRow, setSelectedRow] = useState(0);

  const handleClick = (index, img, stack, url) => {
    setProjectImg(img);
    setProjectStack(stack);
    setProjectUrl(url);
    setSelectedRow(index);
  }

  return (
    <div className={styles.project}>
      <div>
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`${styles.row} ${selectedRow === index ? styles.selected : ''} ${index + 1 === projectList.length ? styles.after : ''}`}
            onClick={() => handleClick(index, project.main, project.stack, project.url)}>
            <div className={styles.title}>
              <p>{project.title}</p>
            </div>
            <div>
              <p>{project.type}</p>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.projectDetail}>
        <img src={projectImg} alt="project img" />
        <div className={styles.projectInfo}>
          <p>{projectStack}</p>
          <div className={styles.viewIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" width="20px">
              <path stroke="#000" stroke-width="2" d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m12-8v12m6-6H7"></path>
            </svg>
            <Link to={projectUrl} onClick={() => window.scrollTo(0, 0)}><p>view the project</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}