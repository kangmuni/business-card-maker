import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const cameraIcon = <FontAwesomeIcon icon={faCamera} />;

const ImageFileInput = ({ isEditForm, imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
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
    </div>
  );
};

export default ImageFileInput;
