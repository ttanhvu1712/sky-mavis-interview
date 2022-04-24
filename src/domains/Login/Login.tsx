import React from "react";
import { PaperFall } from "src/components";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <PaperFall numberOfFlake={20} />
    </div>
  );
};

export default Login;
