import React from "react";
import styles from "./Home.module.scss";
import { PaperFall } from "src/components";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <PaperFall numberOfFlake={20} />
      Home
    </div>
  );
};

export default Home;
