import styles from './Project.module.scss';
import Link from 'next/link';
import React from 'react';

export default function Joheesu() {
  return (
    <>
      <div className={styles.project}>
        <div>
          <h2>Photographer website</h2>
          <p>사진작가 조희수의 포토 갤러리 사이트입니다.</p>
          <div className={styles.gray}>
            <p>2024.08 약 2주</p>
            <p>개인 프로젝트</p>
          </div>
          <div className={styles.urls}>
            <Link href="https://hsphotography.site/">Visit Site</Link>
            <Link href="https://github.com/minji105/joheesu-port">Github</Link>
          </div>
          <p>React.js, SCSS, GSAP</p>

          <h3>메인 페이지</h3>
          <ul>
            <li>스크롤/터치 스와이프에 따른 이미지 스크롤 애니메이션(gsap)</li>
            <li>클릭을 유도하기 위해 마우스 호버 시 'Take a look' 문구가 커서를 따라다니도록 함</li>
          </ul>

          <h3>프로젝트 목록 페이지</h3>
          <ul>
            <li>URLSearchParams과 filter 메서드로 카테고리 필터링 구현</li>
            <li>각 이미지의 비율을 유지한 그리드를 나타내기 위해 css grid를 사용하기 않고 함수를 작성하여 구현
              <ul>
                <li>이미지 배열을 균일하게 칼럼 수만큼 나누고 각 칼럼을 flex로 나열</li>
                <li>뷰포트 너비에 따라 칼럼 수를 변환하여 재배열</li>
                <li>프로젝트 상세 페이지에서도 사용하기 위해 커스텀 훅으로 관리</li>
              </ul>
            </li>
          </ul>

          <h3>프로젝트 상세 페이지</h3>
          <ul>
            <li>이미지를 클릭하거나 'View grid' 버튼을 클락하면 이미지 슬라이드 컨테이너로 전환</li>
            <li>모바일에서는 react-swipeable을 사용하여 버튼 대신 스와이프해서 이미지를 넘길 수 있도록 함함</li>
          </ul>

          <h3>연락 페이지</h3>
          <ul>
            <li>클립보드 api를 통해 이메일을 클릭하면 클립보드에 텍스트 복사</li>
          </ul>

          <h3>모바일</h3>
          <ul>
            <li>스와이프가 적용되는 페이지(메인, 이미지 슬라이드) 접속 시 alert를 2초동안 띄움</li>
            <ul>
              <li>페이지 접속 후 최초 1회씩만 띄우도록 하기 위해 세션 사용</li>
              <li>키를 props로 받아 해당 키 값이 없으면 true로 설정하고 알림을 렌더링</li>
            </ul>
          </ul>

          <h3>성능 최적화 및 검색엔진 최적화</h3>
          <p>이미지 파일의 큰 용량때문에 로딩 속도가 느리고 gsap 애니메이션 효과도 부드럽게 나타나지 못했습니다.
            lighthouse로 성능 검사를 하고 이를 개선하기 위해 성능 최적화를 진행하였으며 메타 태그를 추가해
            검색엔진도 최적화하였습니다.
          </p>
          <ul>
            <li>이미지 최적화</li>
            <ul>
              <li>지연 로딩(LazyLoad)</li>
              <li>jpg에서 webp로 포맷 변환</li>
              <li>뷰포트 크기별 로딩되는 이미지 크기 조정(srcset)</li>
            </ul>
            <li>각 이미지의 비율과 패딩을 설정하여 레이아웃 이동 최소화</li>
            <li>컴포넌트 지연 로딩(lazy(), Suspense)</li>
          </ul>
        </div>
        <div>
          <img src="/images/joheesu/main.gif" alt="Photographer website gif" />
          <div className={styles.sideImg}>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/joheesu/pc-list.png" alt="프로젝트 목록 페이지" />
                <p className={styles.gray}>프로젝트 목록 페이지</p>
              </div>
              <div>
                <img src="/images/joheesu/pc-detail.png" alt="프로젝트 상세 페이지" />
                <p className={styles.gray}>프로젝트 상세 페이지</p>
              </div>
              <div>
                <img src="/images/joheesu/pc-contact.png" alt="연락 페이지" />
                <p className={styles.gray}>연락 페이지</p>
              </div>
              <div>
                <img src="/images/joheesu/main-before.png" alt="메인 페이지 최적화 전" />
                <img src="/images/joheesu/list-before.png" alt="목록 페이지 최적화 전" />
                <p className={styles.gray}>최적화 전</p>
              </div>
            </div>
            <div className={styles.sideImgColumn}>
              <div>
                <img src="/images/joheesu/list.gif" alt="목록 페이지 반응형 gif" />
                <p className={styles.gray}>목록 페이지 반응형</p>
              </div>
              <div>
                <img src="/images/joheesu/pc-detail2.png" alt="프로젝트 상세 페이지 이미지 슬라이드" />
                <p className={styles.gray}>이미지 슬라이드</p>
              </div>
              <div>
                <div className={styles.mobileImgs}>
                  <img src="/images/joheesu/mb-main-alert.jpg" alt="모바일 메인 페이지" />
                  <img src="/images/joheesu/mb-detail-alert.jpg" alt="모바일 상세 페이지" />
                </div>
                <p className={styles.gray}>모바일</p>
              </div>
              <div>
                <img src="/images/joheesu/main-after.png" alt="메인 페이지 최적화 후" />
                <img src="/images/joheesu/list-after.png" alt="목록 페이지 최적화 후" />
                <img src="/images/joheesu/seo.png" alt="검색엔진 최적화" />
                <p className={styles.gray}>최적화 후</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}