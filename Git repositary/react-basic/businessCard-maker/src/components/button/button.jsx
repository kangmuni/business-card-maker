import { memo } from 'react';
import styles from './button.module.css';

const Button = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

export default Button;
