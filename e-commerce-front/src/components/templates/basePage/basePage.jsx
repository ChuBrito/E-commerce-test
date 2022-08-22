// Template de pagina para ser utilizada para testes dos componentes
import React from "react";
import styles from "./basePage.module.css";

const BasePage = () => (
  <div className={styles.basePage}>
    <div className={styles.basePageHeader}>Header da pagina</div>
    <div className={styles.basePageBody}>
      <div className={styles.basePageSideMenu}> menu lateral</div>
      <div className={styles.basePageContainer}>
        coloque seu componentes da pagina aqui
      </div>
    </div>{" "}
  </div>
);

export default BasePage;
