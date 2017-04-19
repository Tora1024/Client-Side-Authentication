import React from 'react';
import styles from './signin.css';

const renderField = field =>(
  <fieldset className={styles.input_group}>
    <label>{field.label}</label>
    <input {...field.input} type={field.type}/>
    {field.meta.touched && field.meta.error && <div className={styles.error_message}>{field.meta.error}</div>}
  </fieldset>
);

export default renderField;