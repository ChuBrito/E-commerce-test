// Template de pagina para ser utilizada para testes dos componentes
import React, { useState } from "react";
import InputField from "../../atoms/inputField/inputField";
import styles from "./basePage.module.css";

const BasePage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const onChangeFunc1 = (value) => {
    setInput1(value);
    console.log("OnChange ", value);
  };
  const onChangeFunc2 = (value) => {
    setInput2(value);
    console.log("OnChange2 ", value);
  };
  const onSubmitFunc1 = (value) => {
    setInput1(value);
    console.log("OnChange1 ", value);
  };
  const onSubmitFunc2 = (value) => {
    console.log("OnSubmit2 ", value);
  };

  return (
    <div className={styles.basePage}>
      <div className={styles.basePageHeader}>Header da pagina</div>
      <div className={styles.basePageBody}>
        <div className={styles.basePageSideMenu}> menu lateral</div>
        <div className={styles.basePageContainer}>
          coloque seu componentes da pagina aqui
          <div>
            <InputField
              labelText={"Input 1"}
              value={input1}
              onChange={onChangeFunc1}
              onSubmit={onSubmitFunc1}
              isValid={() => true}
            />
          </div>
          <div>
            <InputField
              label={"Input 2"}
              value={input2}
              onChange={onChangeFunc2}
              onSubmit={onSubmitFunc2}
              isValid={() => false}
            />
          </div>
          <div>
            <InputField
              label={"Input 3"}
              value={input2}
              onChange={onChangeFunc2}
              onSubmit={onSubmitFunc2}
              isValid={() => true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
