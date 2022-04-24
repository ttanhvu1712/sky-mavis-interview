import React from "react";
import styles from "./Home.module.scss";
import { PaperFall } from "src/components";
import { AssetsList, EntryPoint, WalletInfoCard } from "./components";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <PaperFall numberOfFlake={20} />
      <WalletInfoCard />
      <EntryPoint />
      <AssetsList />
    </div>
  );
};

export default Home;
