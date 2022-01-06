import React from 'react';
import styles from './image_file_input.module.css';

const imageFileInput = () => {
  return (
    <input className={styles.input} type="file" accept="image/*" name="file" />
  );
};

export default imageFileInput;
