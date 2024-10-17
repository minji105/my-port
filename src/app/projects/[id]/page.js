"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import data from '../../data/projects.json';
import BackButton from '../../components/BackButton';
import styles from './page.module.scss';

export default function ProjectDetails() {
  const { id } = useParams();

  const project = data.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <BackButton />

      <div className={styles.container}>
        <div className={styles.imgs}>
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={index} />
          ))}
        </div>

        <div className={styles.detail}>
          <div className={styles.cell}>
            <div>Title</div>
            <div>{project.title}</div>
          </div>
          <div className={styles.cell}>
            <div>Type</div>
            <div>{project.type}</div>
          </div>
          <div className={styles.cell}>
            <div>Stack</div>
            <div>
              {project.stacks.map((stack, index) => (
                <span key={index}>{stack}</span>
              ))}
            </div>
          </div>
          <div className={styles.cell}>
            <div>Github</div>
            <div><Link href={project.github}>{project.github}</Link></div>
          </div>
          <div className={styles.cell}>
            <div>Url</div>
            <div><Link href={project.url}>{project.url}</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

