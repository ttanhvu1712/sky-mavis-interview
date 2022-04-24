import React from "react";
import Image from "next/image";
import styles from "./WalletInfoCard.module.scss";
import { useAppSelector } from "src/slices/hooks";
import { selector } from "src/slices/userInfoSlice";

type WalletInfoCardProps = {};

const WalletInfoCard: React.FC<WalletInfoCardProps> = ({}) => {
  const {
    profile: { walletAddress },
    balances,
  } = useAppSelector(selector);

  const totalProperty = 1000;

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
      <div className={styles.totalPropertyInUSD}>10,000 USD</div>
      <div className={styles.totalPropertyInVND}>23,046,000 VND</div>
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
