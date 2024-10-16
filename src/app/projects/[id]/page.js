"use client"

import { useParams } from 'next/navigation';
import data from '../../data/projects.json';
import styles from './page.module.scss';

export default function ProjectDetails() {
  const { id } = useParams();

  const project = data.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgs}>
        {project.images.map((image, index)=> (
          <img key={index} src={image} alt={index} />
        ))}
      </div>

      <div></div>
    </div>
  );
}

