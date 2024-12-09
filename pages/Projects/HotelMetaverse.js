import styles from '../styling/Project.module.scss';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function HotelMetaverse() {
  const project = projectList[4];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://youtu.be/NHA66W6V02Q" target="_blank">Full Video</Link>
          <Link href="https://github.com/minji105/aptero-hotel-reservation" target="_blank">Github</Link>
          <Link href="/images/hotelMetaverse/메타버스-최종-발표.pdf" target="_blank">PPT</Link>
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
              2인으로 팀을 이루어 메타버스 기반 비대면 호텔 플레이스를 만들었습니다.<br />
              메타버스는 각자 구역을 담당하여 제작하였으며 그 외에 저는 호텔 예약 서비스 제작 및 ppt 제작을 담당했습니다.
            </p>
          </div>
          <img src={project.main} alt="main" />
        </section>
      </div>
    </>
  )
}