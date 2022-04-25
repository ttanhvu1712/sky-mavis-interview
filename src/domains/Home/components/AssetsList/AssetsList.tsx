import React from "react";
import styles from "./AssetsList.module.scss";
import { useAppSelector } from "src/slices/hooks";
import { selector } from "src/slices/userInfoSlice";
import { AssetTicket } from "src/components";
import { BalancesInfo } from "src/types";

type AssetsList = {};

const AssetsList: React.FC<AssetsList> = ({}) => {
  const { balances } = useAppSelector(selector);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Assets</div>
      <div className={styles.listContainer}>
        {Object.keys(balances).map((name) => (
          <AssetTicket
            key={name}
            asset={name as keyof BalancesInfo}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default AssetsList;
