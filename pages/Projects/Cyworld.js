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
          <Link href="https://cyworld-415a6ab2e69e.herokuapp.com/" target="_blank">Visit Site</Link>
          <Link href="https://github.com/minji105/cyworld" target="_blank">Github</Link>
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
              2000년대 대표 sns였던 싸이월드를 재현하여 미니홈피를 만들었습니다.<br />
              - 게시판 관리: 로그인 후 게시물 작성, 수정, 삭제가 가능합니다.<br />
              - 게시물 작성: React Quill을 사용하여 에디터를 구현했습니다.<br />
              - 프로젝트: React Markdown을 사용해 깃허브 리드미 파일을 로드합니다.<br />
              - 방명록: 누구나 방명록을 남길 수 있습니다. <br />
              - 방문자 통계: 오늘 방문자 수와 총 방문자 수를 저장합니다.<br />
              - 테스트용 pw: 1111
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
          <img src="/images/cyworld/main.png" alt="main" />
          <img src="/images/cyworld/profile.png" alt="profile" />
          <img src="/images/cyworld/project.png" alt="project" />
          <img src="/images/cyworld/projectDetail.png" alt="projectDetail" />
          <img src="/images/cyworld/board.png" alt="board" />
          <img src="/images/cyworld/post.png" alt="post" />
          <img src="/images/cyworld/postView.png" alt="postView" />
          <img src="/images/cyworld/visitor.png" alt="visitor" />
        </div>
      </div>
    </>
  )
}