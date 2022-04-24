import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./EntryPoint.module.scss";
import { useRouter } from "next/router";

type EntryPointProps = {};

const EntryPoint: React.FC<EntryPointProps> = ({}) => {
  const router = useRouter();

  const clickHandler = (key: "deposit" | "send" | "swap") => {
    router.push("/exchange");
  };

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.entryPoint, {
          [styles.active]: false,
          [styles.inactive]: true,
        })}
        onClick={() => clickHandler("deposit")}
      >
        <Image
          src={require("./assets/deposit.png")}
          width={48}
          height={48}
          alt="deposit"
        />
        <div className={styles.text}>Deposit</div>
      </div>
      <div
        className={clsx(styles.entryPoint, {
          [styles.active]: true,
          [styles.inactive]: false,
        })}
        onClick={() => clickHandler("send")}
      >
        <Image
          src={require("./assets/send.png")}
          width={48}
          height={48}
          alt="send"
        />
        <div className={styles.text}>Send</div>
      </div>
      <div
        className={clsx(styles.entryPoint, {
          [styles.active]: false,
          [styles.inactive]: true,
        })}
        onClick={() => clickHandler("swap")}
      >
        <Image
          src={require("./assets/swap.png")}
          width={48}
          height={48}
          alt="swap"
        />
        <div className={styles.text}>Swap</div>
      </div>
    </div>
  );
};

export default EntryPoint;
