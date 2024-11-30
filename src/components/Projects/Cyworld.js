import styles from './Project.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import projectList from '../../data/projectList.json';

export default function Cyworld() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      const section = document.getElementById('project-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  }

  const project = projectList[3];

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <g id="_01_align_center" data-name="01 align center">
              <path d="M24,13l0-2-21.445.031L6.877,6.707,5.463,5.293.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L2.615,13.031Z" /></g>
          </svg>
        </button>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link to="https://courageous-taffy-868429.netlify.app/">Visit Site</Link>
          <Link to="https://github.com/minji105/cyworld">Github</Link>
        </div>
        <section>
          <div>
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
                  <p>{project.stack}</p>
                </li>
              </ul>
            </div>
            <p>
              2000년대 대표 sns였던 싸이월드를 재현하여 제 미니홈피를 만들었습니다.<br />
              - 게시물 관리: 로그인 후 게시물 작성, 수정, 삭제가 가능합니다.<br />
              - 게시물 작성: React Quill을 사용하여 에디터를 구현했습니다.<br />
              - 프로젝트: React Markdown을 사용해 깃허브 리드미 파일을 로드합니다.<br />
              - 방명록: 누구나 방명록을 남길 수 있습니다. <br />
              - 방문자 통계: 오늘 방문자 수와 총 방문자 수를 확인할 수 있습니다.<br />
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
          <img src="/images/cyworld/main.png" alt="" />
          <img src="/images/cyworld/profile.png" alt="" />
          <img src="/images/cyworld/project.png" alt="" />
          <img src="/images/cyworld/projectDetail.png" alt="" />
          <img src="/images/cyworld/board.png" alt="" />
          <img src="/images/cyworld/post.png" alt="" />
          <img src="/images/cyworld/postView.png" alt="" />
          <img src="/images/cyworld/visitor.png" alt="" />
        </div>
      </div>
    </>
  )
}