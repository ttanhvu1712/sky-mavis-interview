import React from "react";
import Image from "next/image";
import styles from "./AssetsList.module.scss";
import { useAppSelector } from "src/slices/hooks";
import { selector as userInfoSelector } from "src/slices/userInfoSlice";
import { selector as marketSelector } from "src/slices/marketInfoSlice";
import { formatCurrencyNumber } from "src/utils";

type AssetsList = {};

type AssetsName = "eur" | "yen" | "usd";

const AssetsList: React.FC<AssetsList> = ({}) => {
  const { balances } = useAppSelector(userInfoSelector);
  const { exchangeRates } = useAppSelector(marketSelector);

  const assets = ["eur", "yen", "usd"];
  const icons = {
    eur: "/images/eur.png",
    yen: "/images/yen.png",
    usd: "/images/usd.png",
  };

  const getRawValue = (key: string) => {
    return `${formatCurrencyNumber(
      balances[key as AssetsName]
    )} ${key.toUpperCase()}`;
  };

  const getValueInVND = (key: string) => {
    const rawValue = balances[key as AssetsName];
    const rate = exchangeRates[key as AssetsName];
    return `${formatCurrencyNumber(rate * rawValue)} VND`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Assets</div>
      <div className={styles.listContainer}>
        {assets.map((value) => (
          <div key={value} className={styles.assetTicket}>
            <div className={styles.icon}>
              <Image
                src={icons[value as AssetsName]}
                width={32}
                height={32}
                alt="icon"
              />
            </div>
            <div className={styles.values}>
              <div className={styles.rawValue}>{getRawValue(value)}</div>
              <div className={styles.valueInVND}>{getValueInVND(value)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsList;
