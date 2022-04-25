import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./WalletInfoCard.module.scss";
import { useAppSelector } from "src/slices/hooks";
import { selector as userInfoSelector } from "src/slices/userInfoSlice";
import { selector as marketInfoSelector } from "src/slices/marketInfoSlice";
import { BalancesInfo } from "src/types";
import { formatCurrencyNumber } from "src/utils";
import { BouncingDots } from "src/components";

type WalletInfoCardProps = {};

const WalletInfoCard: React.FC<WalletInfoCardProps> = ({}) => {
  const {
    profile: { walletAddress },
    balances,
  } = useAppSelector(userInfoSelector);

  const { asyncActionPending, exchangeRates } =
    useAppSelector(marketInfoSelector);
  const isGetExchangeRatePending = asyncActionPending === "getExchangeRates";

  const usdToVnd = exchangeRates["usd"] !== 0 ? 1 / exchangeRates["usd"] : 1;
  const totalProperty = useMemo(() => {
    return Object.keys(balances).reduce((result, key) => {
      const assetValue =
        balances[key as keyof BalancesInfo] *
        exchangeRates[key as keyof BalancesInfo];
      return result + assetValue;
    }, 0);
  }, [balances, exchangeRates]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>My Wallet</span>
        <span className={styles.walletAddress}>{`(${walletAddress})`}</span>
        <Image
          src={require("./assets/copy.png")}
          alt="copy"
          width={16}
          height={16}
        />
      </div>
      <div className={styles.totalPropertyInUSD}>
        {!isGetExchangeRatePending ? (
          `${formatCurrencyNumber(totalProperty * usdToVnd)} USD`
        ) : (
          <BouncingDots className={styles.loading} />
        )}
      </div>
      <div className={styles.totalPropertyInVND}>
        {!isGetExchangeRatePending ? (
          `${formatCurrencyNumber(totalProperty)} VND`
        ) : (
          <BouncingDots className={styles.loading} />
        )}
      </div>
      <div className={styles.iconRonin}>
        <Image
          src={require("./assets/ronin-white.png")}
          alt="copy"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default WalletInfoCard;
