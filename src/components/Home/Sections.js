import React, { useState } from 'react';
import styles from './Sections.module.scss';
import Skills from './Skills';
import Resume from './Resume';
import Project from './Project';

export default function Sections() {
  return (
    <div className={styles.container}>
      <section>
        <h2>Skills</h2>

        <p className={styles.detail}>detail</p>

        <Skills />
      </section>

      {/* <section className={styles.resume}>
        <h2>Resume</h2>

        <p className={styles.pdf}>download (.pdf)</p>

        <Resume />
      </section> */}

      <section>
        <h2>Project</h2>

        <Project />
      </section>
    </div>
  )
}