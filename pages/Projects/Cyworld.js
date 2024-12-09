import styles from '../styling/Project.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function Cyworld() {
  const project = projectList[2];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://courageous-taffy-868429.netlify.app/">Visit Site</Link>
          <Link href="https://github.com/minji105/cyworld">Github</Link>
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
              2000년대 대표 sns였던 싸이월드를 재현하여 미니홈피를 만들었습니다.<br />
              - 게시판 관리: 로그인 후 게시물 작성, 수정, 삭제가 가능합니다.<br />
              - 게시물 작성: React Quill을 사용하여 에디터를 구현했습니다.<br />
              - 프로젝트: React Markdown을 사용해 깃허브 리드미 파일을 로드합니다.<br />
              - 방명록: 누구나 방명록을 남길 수 있습니다. <br />
              - 방문자 통계: 오늘 방문자 수와 총 방문자 수를 저장합니다.<br />
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
          <section>
            <h4>메인 페이지</h4>
            <img src="/images/cyworld/main.png" alt="" />
          </section>
          <section>
            <h4>프로필 페이지</h4>
            <img src="/images/cyworld/profile.png" alt="" />
          </section>
          <section>
            <h4>프로젝트 페이지</h4>
            <div>
              <img src="/images/cyworld/project.png" alt="" />
              <img src="/images/cyworld/projectDetail.png" alt="" />
            </div>
          </section>
          <section>
            <h4>게시판 페이지</h4>
            <div>
              <img src="/images/cyworld/board.png" alt="" />
              <img src="/images/cyworld/post.png" alt="" />
              <img src="/images/cyworld/postView.png" alt="" />
            </div>
          </section>
          <section>
            <h4>방명록 페이지</h4>
            <div>
              <img src="/images/cyworld/visitor.png" alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}