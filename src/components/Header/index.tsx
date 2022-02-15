import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/spacetraveling.png" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
