import styles from './Project.module.scss';
import Link from 'next/link';
import React from 'react';

export default function Cyworld() {
  return (
    <>
      <div className={styles.project}>
        <div>
          <h2>Cyworld Clone</h2>
          <p>싸이월드를 재현한 미니홈피입니다.</p>
          <div className={styles.gray}>
            <p>2024.08~09 약 3주</p>
            <p>개인 프로젝트</p>
          </div>
          <div className={styles.urls}>
            <Link href="https://cyworld-415a6ab2e69e.herokuapp.com/">Visit Site</Link>
            <Link href="https://github.com/minji105/cyworld">Github</Link>
          </div>
          <p>React.js, Next.js, MongoDB, SCSS</p>

          <br />
          <h3>Next.js API routes 사용</h3>
          <ul>
            <li>투데이/토탈 방문자 수</li>
            <li>로그인/로그아웃 - 로그인 시 jwt 토큰 발급, 토큰이 있을 때만 게시물 작성, 수정, 삭제 가능</li>
            <li>게시물 작성/수정/삭제/조회</li>
            <li>방명록 남기기</li>
          </ul>

          <h3>Github API 사용하여 README 파일 실시간 로드 및 렌더링</h3>
          <ul>
            <li>ReactMarkdown으로 마크다운을 React 컴포넌트로 렌더링</li>
            <li>remarkGfm, rehypeRaw 플러그인을 추가하여 원본 형식을 유지</li>
          </ul>

          <h3>BGM 재생 기능</h3>
          <ul>
            <li>오디오 컨트롤 기능</li>
            <li>볼륨 조절 시 슬라이더 배경 동적 업데이트</li>
          </ul>

          <h3>ETC</h3>
          <ul>
            <li>React Quill로 에디터 구현</li>
            <li>Nes.css 프레임워크를 사용하여 레트로 디자인 구현</li>
            <li>SEO 최적화: next/document 사용하여 메타 태그 추가</li>
            <li>Heroku로 배포</li>
          </ul>
        </div>

        <div>
          <img src="/images/cyworld/main.png" alt="메인 페이지" />
          <div className={styles.sideImg}>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/cyworld/profile.png" alt="프로필 페이지" />
                <p className={styles.gray}>프로필 페이지</p>
              </div>
              <div>
                <img src="/images/cyworld/project.png" alt="프로젝트 페이지 목록" />
                <img src="/images/cyworld/projectDetail.png" alt="프로젝트 페이지 상세" />
                <p className={styles.gray}>프로젝트 페이지</p>
              </div>
              <div>
                <div className={styles.mobileImgs}>
                  <img src="/images/cyworld/side.png" alt="사이드" />
                </div>
                <p className={styles.gray}>최적화 전</p>
              </div>
            </div>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/cyworld/board.png" alt="게시판 페이지 목록" />
                <img src="/images/cyworld/post.png" alt="게시판 페이지 상세" />
                <img src="/images/cyworld/postView.png" alt="게시판 작성" />
                <p className={styles.gray}>게시판 페이지</p>
              </div>
              <div>
                <img src="/images/cyworld/visitor.png" alt="방명록 페이지" />
                <p className={styles.gray}>방명록 페이지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}