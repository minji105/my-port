import styles from '../styling/Project.module.scss';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import projectList from '../../data/projectList.json';
import Back from '../../components/button/Back';
import Buttons from '../../components/button/Buttons';

export default function HotelMetaverse() {
  const project = projectList[3];

  return (
    <>
      <Buttons></Buttons>

      <div className={styles.container}>
        <Back></Back>

        <h1>{project.title}</h1>
        <div className={styles.urls}>
          <Link href="https://youtu.be/NHA66W6V02Q">Full Video</Link>
          <Link href="https://github.com/minji105/aptero-hotel-reservation">Github</Link>
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

        <div className={styles.imgContainer}>
          <section>
            <h4>발표 ppt</h4>
            <div>
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_1.png" alt="ppt1" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_2.png" alt="ppt2" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_3.png" alt="ppt3" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_4.png" alt="ppt4" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_5.png" alt="ppt5" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_6.png" alt="ppt6" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_7.png" alt="ppt7" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_8.png" alt="ppt8" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_9.png" alt="ppt9" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_10.png" alt="ppt10" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_11.png" alt="ppt11" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_12.png" alt="ppt12" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_13.png" alt="ppt13" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_14.png" alt="ppt14" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_15.png" alt="ppt15" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_16.png" alt="ppt16" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_17.png" alt="ppt17" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_18.png" alt="ppt18" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_19.png" alt="ppt19" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_20.png" alt="ppt20" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_21.png" alt="ppt21" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_22.png" alt="ppt22" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_23.png" alt="ppt23" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_24.png" alt="ppt24" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_25.png" alt="ppt25" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_26.png" alt="ppt26" />
              <img src="/images/hotelMetaverse/ppt/메타버스-최종-발표_27.png" alt="ppt27" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}