"use client"

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.scss';

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <span className={styles.back} onClick={goBack}>
        ⟵ BACK
      </span>
    </>
  )
}