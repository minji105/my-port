/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";
import data from "../data/projects.json";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.container}>
      {data.map((project, index) => (
        <Link key={index} href={`/projects/${project.id}`}>
          <div className={styles.image}>
            <img src={`/images/${project.id}/1.png`} alt={project.name} />
            <img src={`/images/${project.id}/2.png`} alt={project.name} />
          </div>
          <div className={styles.title}>
            <span>{project.title}</span>
            <span>{project.type}</span>
          </div>
        </Link>
      ))}


      {data.map((project, index) => (
        <div key={index}>
          <div className={styles.image}>
            <img src={project.image} alt={project.name} />
          </div>
          <div className={styles.title}>
            <span>{project.title}</span>
            <span>{project.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
