import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Sections.module.scss';
import projectList from '../../data/projectList.json';

export default function Sections() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const [projectTitle, setProjectTitle] = useState(projectList[0].title);
  const [projectImg, setProjectImg] = useState(projectList[0].main);
  const [projectStack, setProjectStack] = useState(projectList[0].stack);
  const [projectUrl, setProjectUrl] = useState(projectList[0].url);
  const [projectExplain, setProjectExplain] = useState(projectList[0].explain);
  const [selectedRow, setSelectedRow] = useState(0);

  const handleClick = (index, title, img, stack, url, explain) => {
    setProjectImg(img);
    setProjectTitle(title);
    setProjectStack(stack);
    setProjectUrl(url);
    setSelectedRow(index);
    setProjectExplain(explain);
  }

  return (
    <div className={styles.project}>
      <div>
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`${styles.row} ${selectedRow === index ? styles.selected : ''} ${index + 1 === projectList.length ? styles.after : ''}`}
            onClick={() => handleClick(index, project.title, project.main, project.stack, project.url, project.explain)}>
            <div className={styles.projectTitle}>
              <div className={styles.title}>
                <p>{project.title}</p>
              </div>
              <div>
                <p>{project.type}</p>
                <p>{project.category}</p>
              </div>
            </div>
            {!isMobile && (
              <div className={styles.projectDetail}>
                <img src={projectImg} alt="project img" />
                <div className={styles.projectInfo}>
                  <p style={{ fontWeight: "500" }}>{projectTitle}</p>
                  <p>{projectExplain}</p>
                  <div className={styles.stacks}>
                    {projectStack.map((stack, index) => (
                      <p key={index}>{stack}</p>
                    ))}
                  </div>

                  <div className={`${projectTitle === "Portfolio Website" ? styles.hide : ""} ${styles.viewIcon}`}>
                    <Link href={projectUrl} state={{ fromProject: true }} onClick={() => window.scrollTo(0, 0)}>
                      <svg xmlns="http://www.w3.org/2000/svg" stroke="#fff" viewBox="0 0 26 26" width="20px">
                        <path stroke="#fff" strokeWidth="2" d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m12-8v12m6-6H7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isMobile && (
        <div className={styles.projectDetail}>
          <img src={projectImg} alt="project img" />
          <div className={styles.projectInfo}>
            <p style={{ fontWeight: "500" }}>{projectTitle}</p>
            <p>{projectExplain}</p>
            <div className={styles.stacks}>
              {projectStack.map((stack, index) => (
                <p key={index}>{stack}</p>
              ))}
            </div>

            <div className={`${projectTitle === "Portfolio Website" ? styles.hide : ""} ${styles.viewIcon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" width="20px">
                <path stroke="blue" strokeWidth="2" d="M11 1H1v10M15 1h10v10M15 25h10V15M11 25H1V15m12-8v12m6-6H7"></path>
              </svg>
              <Link href={projectUrl} state={{ fromProject: true }} onClick={() => window.scrollTo(0, 0)}>
                <p>view the project</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}