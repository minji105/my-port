"use client"

import { useParams } from 'next/navigation';
import Link from 'next/link';
import data from '../../data/projects.json';
import OpenSite from '@/app/components/OpenSite';
import styles from './page.module.scss';

export default function ProjectDetails() {
  const { id } = useParams();

  const project = data.find((proj) => proj.id === id);

  const prev = Number(id) - 1 === 0 ? 2 : Number(id) - 1;
  const next = Number(id) + 1 === 3 ? 1 : Number(id) + 1;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgs}>
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={index} />
          ))}
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={index} />
          ))}
        </div>

        <div className={styles.detail}>
          <div className={styles.buttons}>
            <OpenSite url={project.url} />
          </div>

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

      <div className={styles.footer}>
        <Link href={`/projects/${prev}`}>⟵ Prev</Link>
        <Link href={`/projects/${next}`}>Next ⟶</Link>
      </div>
    </>
  );
}

