import styles from './Project.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import projectList from '../../data/projectList.json';

export default function HandTracking() {
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
  const project = projectList[5];

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
              전공과목 '증강현실과 가상현실'의 텀 프로젝트로 제작한 것입니다.<br/>
              구글의 Mediapipe 프레임워크를 활용하여 웹캠으로 사용자의 손을 인식해 
              별도의 컨트롤러 없이 가상현실 내에서 상호작용할 수 있습니다. 
              인식된 손의 랜드마크 좌표를 실시간으로 추출하고 사용자 데이터그램 프로토콜(UDP)을 
              이용하여 Unity로 전송합니다. Unity에서는 실시간으로 전송받은 
              데이터를 기반으로 랜드마크 좌표에 오브젝트를 생성하여 손 모양을 나타냅니다.
            </p>
          </div>
          <div className={styles.mainImg}>
            <img src={project.main} alt="main" />
          </div>
        </section>

        <div className={styles.imgContainer}>
          <img src="/images/handTracking/ppt/슬라이드1.png" alt="ppt1" />
          <img src="/images/handTracking/ppt/슬라이드2.png" alt="ppt2" />
          <img src="/images/handTracking/ppt/슬라이드3.png" alt="ppt3" />
          <img src="/images/handTracking/ppt/슬라이드4.png" alt="ppt4" />
          <img src="/images/handTracking/ppt/슬라이드5.png" alt="ppt5" />
          <img src="/images/handTracking/ppt/슬라이드6.png" alt="ppt6" />
          <img src="/images/handTracking/ppt/슬라이드7.png" alt="ppt7" />
          <img src="/images/handTracking/ppt/슬라이드8.png" alt="ppt8" />
          <img src="/images/handTracking/ppt/슬라이드9.png" alt="ppt9" />
          <img src="/images/handTracking/ppt/슬라이드10.png" alt="ppt10" />
        </div>
      </div>
    </>
  )
}