import { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => {
  console.log('header');
  return (
    <section className={styles.header}>
      <header className={styles.title}>Business Card Maker</header>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </section>
  );
});

export default Header;
