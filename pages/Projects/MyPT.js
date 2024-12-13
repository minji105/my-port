import styles from '../styling/Project.module.scss';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function MyPT() {
  const project = projectList[1];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://github.com/minji105/MyPT_capstone_design">Github</Link>
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
                  <div>
                    {project.stack.map((item, index) => (
                      <span className={styles.skillName}>{item}</span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <p>
              담당 부분)<br />
              - 서버 및 데이터 베이스 연결 <br />
              - RESTful API 구축 및 연동<br />
              - 사용자 관리: 회원가입, 로그인(bcrypt로 비밀번호 해시 비교, jwt 토큰 반환)<br />
              - 게시판 관리: 게시물 등록, 목록 조회, 상세 조회, 수정, 삭제<br />
              - 운동 기록 관리: 운동 종료 시 운동 기록 자동 저장, 기록 조회<br />
              - Context API로 로그인 상태와 사용자 ID를 전역 관리
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
          <section>
            <h4>메인 페이지</h4>
            <div>
              <img src="/images/myPT/main.png" alt="" />
              <img src="/images/myPT/setting.png" alt="" />
            </div>
          </section>
          <section>
            <h4>로그인 페이지</h4>
            <div>
              <img src="/images/myPT/login.png" alt="" />
            </div>
          </section>
          <section>
            <h4>회원가입 페이지</h4>
            <div>
              <img src="/images/myPT/register.png" alt="" />
            </div>
          </section>
          <section>
            <h4>운동 페이지</h4>
            <div>
              <img src="/images/myPT/exercise1.png" alt="" />
              <img src="/images/myPT/exercise2.png" alt="" />
            </div>
          </section>
          <section>
            <h4>기록 페이지</h4>
            <div>
              <img src="/images/myPT/record.png" alt="" />
            </div>
          </section>
          <section>
            <h4>튜토리얼 페이지</h4>
            <div>
              <img src="/images/myPT/tutorial.png" alt="" />
            </div>
          </section>
          <section>
            <h4>게시판 페이지</h4>
            <div>
              <img src="/images/myPT/community.png" alt="" />
              <img src="/images/myPT/post.png" alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}