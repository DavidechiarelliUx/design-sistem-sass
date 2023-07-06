import { useState } from "react";

import styles from "./inputText.module.scss";

const InputText = (props) => {
    const {
      id,
      label,
      name,
      line,
      placeholder,
      disable,
      icon,
      error,
      errorMessage,
      handleChange,
    } = props || {};
  
    return (
      <div className={`${styles.InputForm} ${error ? styles.error : ""}`}>
        <label htmlFor={id}>
          <span className={styles.label}>{label}</span>
          <input
            type="text"
            placeholder={placeholder}
            id={id}
            name={name}
            disable={disable}
            onChange={(e)=>handleChange(e.target.value)}
          />
          {error && <span className={styles.errorMessage}>{errorMessage}</span>}
        </label>
      </div>
    );
  }

export default InputText