import Link from 'next/link';
import styles from './Button.module.scss';

export default function OpenSite({url}) {
  return (
    <>
        <Link className={styles.back} href={url} target="_blank" >Open Site ⤴</Link>
    </>
  )
}