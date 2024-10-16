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
      <h1>{project.title}</h1>
      <p>Type: {project.type}</p>
      <p>Date: {project.date}</p>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

