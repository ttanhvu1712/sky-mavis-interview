import React from "react";
import Image from "next/image";
import styles from "./AssetsList.module.scss";
import clsx from "clsx";

type AssetsList = {};

const AssetsList: React.FC<AssetsList> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Assets</div>
      <div className={styles.listContainer}>
        <div className={styles.assetTicket}>
          <div className={styles.icon}>
            <Image src={"/images/eur.png"} width={32} height={32} alt="icon" />
          </div>
          <div className={styles.values}>
            <div className={styles.rawValue}>50 EUR</div>
            <div className={styles.valueInVND}>1,531,972 VND</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsList;
