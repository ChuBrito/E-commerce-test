import React from "react";
import styles from "./inputField.module.css";

const InputField = ({ labelText, onChange, onSubmit, value, isValid }) => {
  return (
    <div id={styles.Cep}>
      <div id={styles.DivCep}>
        <p id={styles.PCep}>{labelText}</p>
        <input
          type="password"
          placeholder="CEP"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        ></input>
        <button
          id={styles.BtCep}
          name="CepOk"
          onClick={(event) => onSubmit(event.target.value)}
        >
          OK
        </button>
        {isValid() && <span style={{ color: "red" }}>erro</span>}
      </div>
    </div>
  );
};

export default InputField;
