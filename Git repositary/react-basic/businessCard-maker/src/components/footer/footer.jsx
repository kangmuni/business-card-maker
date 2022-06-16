import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  console.log('footer');
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>MUNI</p>
    </footer>
  );
});

export default Footer;
