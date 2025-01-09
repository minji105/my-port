import styles from './Project.module.scss';
import Link from 'next/link';
import React from 'react';

export default function Museum() {
  return (
    <>
      <div className={styles.project}>
        <div>
          <h2>MILWAUKEE ART MUSEUM CLONE</h2>
          <p>클론 코딩</p>
          <div className={styles.gray}>
            <p>2024.12 (3일)</p>
            <p>개인 프로젝트</p>
          </div>
          <div className={styles.urls}>
            <Link href="https://minji105.github.io/Milwaukee-Art-Museum-Clone/">Visit Site</Link>
            <Link href="https://github.com/minji105/Milwaukee-Art-Museum-Clone">Github</Link>
          </div>
          <p>HTML, CSS, JS, GSAP</p>

          <h3>Parallex Scrolling</h3>
          <ul>
            <li>headline 요소의 스크롤 이동 속도 조정</li>
            <li>Intersection Observer API를 사용하여 스크롤 중 이미지 섹션이 뷰포트에 들어오면 섹션 안의 이미지 이동 속도를 늦춤</li>
          </ul>

          <h3>이미지 슬라이드</h3>
          <ul>
            <li>4초마다 이미지 전환 및 버튼으로 수동 조작 가능</li>
          </ul>

          <h3>Grabbing Scroll</h3>
          <ul>
            <li>마우스를 클릭한 상태로 카드 섹션을 가로로 스크롤하는 기능</li>
            <li>GSAP ScrollToPlugin을 등록하여 부드러운 느낌을 더함</li>
          </ul>

          <h3>ETC</h3>
          <ul>
            <li>스크롤 위치에 따라 header 스타일 변경</li>
            <li>메뉴 제작 - 메뉴 오픈 시 스크롤 기능 차단</li>
            <li>Lenis로 스크롤 감도 조정</li>
            <li>반응형으로 제작</li>
          </ul>
        </div>

        <div>
          <img src="/images/museum/main.gif" alt="밀워키 박물관 사이트 클론코딩 gif" />
          <div className={styles.sideImg}>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/museum/headline.gif" alt="헤드라인 패럴렉스 스크롤링" />
                <p className={styles.gray}>Headline Parallex Scrolling</p>
              </div>
              <div>
                <img src="/images/museum/imgslide.gif" alt="이미지 슬라이드" />
                <p className={styles.gray}>이미지 슬라이드</p>
              </div>
              <div>
                <img src="/images/museum/menu.gif" alt="메뉴" />
                <p className={styles.gray}>메뉴</p>
              </div>
            </div>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/museum/intersection.gif" alt="intersection observer api" />
                <p className={styles.gray}>이미지 섹션</p>
              </div>
              <div>
                <img src="/images/museum/grabbing.gif" alt="grabbing scroll" />
                <p className={styles.gray}>grabbing scroll</p>
              </div>
              <div>
                <img src="/images/museum/responsive.gif" alt="반응형" />
                <p className={styles.gray}>반응형</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}