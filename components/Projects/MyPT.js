import styles from './Project.module.scss';
import Link from 'next/link';
import React from 'react';

export default function MyPT() {
  return (
    <>
      <div className={styles.project}>
        <div>
          <h2>MyPT</h2>
          <p>사용자의 운동 자세를 실시간으로 피드백하는 개인 운동 지도 사이트입니다.</p>
          <div className={styles.gray}>
            <p>2023.01~04</p>
            <p>3인 프로젝트</p>
          </div>
          <div className={styles.urls}>
            <Link href="https://github.com/minji105/MyPT_capstone_design">Github</Link>
          </div>
          <p>React.js, Node.js/Express, MongoDB</p>

          <h3>담당 부분</h3>
          <ul>
            <li>서버 및 데이터베이스 환경설정</li>
            <li>Node.js와 Express를 사용하여 RESTful API 개발 및 CRUD 기능 제공
              <ul>
                <li>회원가입 및 로그인, 로그아웃</li>
                <li>게시물 등록/조회/수정/삭제</li>
                <li>운동기록 저장/조회</li>
              </ul>
            </li>
            <li>Mongoose를 사용하여 스키마 설계</li>
            <li>사용자 인증: JWT 토큰 발급, bcrypt를 적용하여 비밀번호 암호화</li>
            <li>Context API로 로그인 상태와 사용자 ID 전역 관리</li>
            <li>Fetch API를 사용하여 백엔드와 프론트엔드 간 API 연동</li>
            <li>Postman을 사용하여 API 동작 및 응답 테스트</li>
          </ul>
        </div>

        <div>
          <img src="/images/myPT/main.png" alt="메인 페이지" />
          <div className={styles.sideImg}>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/myPT/login.png" alt="로그인" />
                <img src="/images/myPT/register.png" alt="회원가입" />
                <p className={styles.gray}>로그인/회원가입</p>
              </div>
              <div>
                  <img src="/images/myPT/setting.png" alt="사이드" />
                <p className={styles.gray}>운동 목표 설정</p>
              </div>
            </div>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/myPT/community.png" alt="커뮤니티 목록" />
                <img src="/images/myPT/post.png" alt="커뮤니티 상세" />
                <p className={styles.gray}>커뮤니티 목록/상세</p>
              </div>
              <div>
                <img src="/images/myPT/exercise1.png" alt="방명록 페이지" />
                <img src="/images/myPT/exercise2.png" alt="방명록 페이지" />
                <p className={styles.gray}>운동 페이지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}