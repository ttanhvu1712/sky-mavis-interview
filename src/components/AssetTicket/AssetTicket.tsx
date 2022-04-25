import React from "react";
import Image from "next/image";
import type { BalancesInfo } from "src/types";
import styles from "./AssetTicket.module.scss";
import { useAppSelector } from "src/slices/hooks";
import { selector as userInfoSelector } from "src/slices/userInfoSlice";
import { selector as marketSelector } from "src/slices/marketInfoSlice";
import { formatCurrencyNumber } from "src/utils";
import clsx from "clsx";
import BouncingDots from "../BouncingDots";

type AssetTicketProps = {
  asset: keyof BalancesInfo;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const AssetTicket: React.FC<AssetTicketProps> = ({
  asset,
  className,
  onClick,
}) => {
  const { balances } = useAppSelector(userInfoSelector);
  const { asyncActionPending, exchangeRates } = useAppSelector(marketSelector);
  const isGetExchangeRatePending = asyncActionPending === "getExchangeRates";

  const icons = {
    eur: "/images/eur.png",
    yen: "/images/yen.png",
    usd: "/images/usd.png",
  };

  const getRawValue = (key: keyof BalancesInfo) => {
    return `${formatCurrencyNumber(balances[key])} ${key.toUpperCase()}`;
  };

  const getValueInVND = (key: keyof BalancesInfo) => {
    const rawValue = balances[key];
    const rate = exchangeRates[key];
    return `${formatCurrencyNumber(rate * rawValue)} VND`;
  };

  return (
    <div className={clsx(styles.assetTicket, className)} onClick={onClick}>
      <div className={styles.icon}>
        <Image src={icons[asset]} width={32} height={32} alt="icon" />
      </div>
      <div className={styles.values}>
        <div className={styles.rawValue}>{getRawValue(asset)}</div>
        <div className={styles.valueInVND}>
          {isGetExchangeRatePending ? <BouncingDots className={styles.loading}/> : getValueInVND(asset)}
        </div>
      </div>
    </div>
  );
};

export default AssetTicket;
