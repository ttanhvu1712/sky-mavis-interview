import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { PaperFall } from "src/components";
import { AssetsList, EntryPoint, WalletInfoCard } from "./components";
import { useAppDispatch, useAppSelector } from "src/slices/hooks";
import { actions, selector } from "src/slices/marketInfoSlice";

const { getExchangeRates } = actions;

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExchangeRates({ target: "vnd" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
