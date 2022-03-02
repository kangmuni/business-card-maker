import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const cameraIcon = <FontAwesomeIcon icon={faCamera} />;

const ImageFileInput = ({ isEditForm, imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {isEditForm ? (
        <button className={styles.editBtn} onClick={onButtonClick}>
          {cameraIcon}
        </button>
      ) : (
        <button className={styles.addBtn} onClick={onButtonClick}>
          {name || cameraIcon}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
