import React from "react";
import styles from "./inputEmail.module.scss";

const InputEmail = ({ label, value, onChange, placeholder, required }) => {
  return (
    <div className={`${styles["form-group"]}`}>
      <label>{label}</label>
      <input
        type="email"
        className={styles["form-control"]}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputEmail;