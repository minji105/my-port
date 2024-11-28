import styles from './Project.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import projectList from '../../data/projectList.json';

export default function Joheesu() {
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

  const [imageVisibility, setImageVisibility] = useState(false);
  const project = projectList[0];

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
          <Link to="https://hsphotography.site/">Visit Site</Link>
          <Link to="https://github.com/minji105/joheesu-port">Github</Link>
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
              사진작가 조희수의 개인 사이트입니다. 반응형으로 제작하였습니다.<br />
              메인, 프로젝트 목록, 프로젝트 상세, 연락처 총 4개의 페이지로 구성되어있습니다.<br />
              성능 최적화를 위해 레이아웃 이동 최소화, 이미지 최적화, JS 및 CSS 파일 축소 등을
              진행하였으며 그 결과 메인 페이지는 성능이 71에서 91로, 목록 페이지는 57에서 97로 올랐습니다(lighthouse).
            </p>
          </div>
          <div className={styles.mainImg}>
            <img src={project.main} alt="main" />
          </div>
        </section>

        <div className={styles.imgContainer}>
          <img src="/images/joheesu/pc-main.png" alt="" />
          <img src="/images/joheesu/pc-list.png" alt="" />
          <img src="/images/joheesu/pc-detail.png" alt="" />
          <img src="/images/joheesu/pc-detail2.png" alt="" />
          <img src="/images/joheesu/pc-contact.png" alt="" />
          <img src="/images/joheesu/list.gif" alt="" />
          <div className={styles.mobile}>
            <img src="/images/joheesu/mb-main.png" alt="" />
            <img src="/images/joheesu/mb-list.png" alt="" />
            <img src="/images/joheesu/mb-detail.png" alt="" />
            <img src="/images/joheesu/mb-detail2.png" alt="" />
            <img src="/images/joheesu/mb-contact.png" alt="" />
          </div>
          <div className={styles.mobile}>
            <img src="/images/joheesu/mb-main-alert.jpg" alt="" />
            <img src="/images/joheesu/mb-detail-alert.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}