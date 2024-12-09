import styles from '../styling/Project.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function Joheesu() {
  const project = projectList[0];

  return (
    <>
      <Buttons />

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://hsphohrefgraphy.site/">Visit Site</Link>
          <Link href="https://github.com/minji105/joheesu-port">Github</Link>
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
          <img src={project.main} alt="main" />
        </section>

        <div className={styles.imgContainer}>
          <section>
            <div>
              <h4>메인 페이지</h4>
              gsap을 이용하여 스크롤 시 이미지 전환 효과를 넣었습니다.<br />
              클릭하면 해당 프로젝트 페이지로 이동합니다.
            </div>
            <img src="/images/joheesu/main.gif" alt="" />
          </section>
          <section>
            <div>
              <h4>목록 페이지</h4>
              카테고리를 클릭하면 해당 카테고리 목록으로 필터링됩니다.<br />
              상세 페이지에서는 목록 형식이나 슬라이더 형식으로 이미지를 볼 수 있고,
              모바일에서는 화살표 버튼 대신 스와이핑해서 좌우로 넘길 수 있도록 하였습니다. (react-swipeable)
            </div>
            <div>
              <img src="/images/joheesu/pc-list.png" alt="" />
              <img src="/images/joheesu/list.gif" alt="" />
            </div>
          </section>
          <section>
            <div>
              <h4>상세 페이지</h4>
              그리드 형식이나 슬라이더 형식으로 이미지를 볼 수 있습니다.<br />
              모바일에서는 슬라이더를 화살표 버튼 대신 스와이핑해서 좌우로 넘길 수 있도록 하였습니다. (react-swipeable)
            </div>
            <div>
              <img src="/images/joheesu/pc-detail.png" alt="" />
              <img src="/images/joheesu/pc-detail2.png" alt="" />
            </div>
          </section>
          <section>
            <div>
              <h4>연락처 페이지</h4>
            </div>
            <div>
              <img src="/images/joheesu/pc-contact.png" alt="" />
            </div>
          </section>
          <section>
            <div>
              <h4>모바일</h4>
              모바일에서는 스와이프가 적용되는 페이지에 알림이 나타납니다.<br />
              스토리지 키를 사용하여 사이트 접속 후 최초 1회만 나타나도록 하였습니다.
            </div>
            <div>
              <div className={styles.mobile}>
                <img src="/images/joheesu/mb-main-alert.jpg" alt="" />
                <img src="/images/joheesu/mb-list.png" alt="" />
                <img src="/images/joheesu/mb-detail.png" alt="" />
                <img src="/images/joheesu/mb-detail-alert.jpg" alt="" />
                <img src="/images/joheesu/mb-contact.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}