import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, FormField } from "src/components";
import { useAppSelector } from "src/slices/hooks";
import { selector } from "src/slices/userInfoSlice";
import type { BalancesInfo, ExchangeRate } from "src/types";
import styles from "./Exchange.module.scss";
import { ChangeAssetFieldModal } from "./components"

type ExchangeForm = {
  to: string;
  asset: keyof BalancesInfo;
  amount: number;
};

const Exchange: React.FC = () => {
  const router = useRouter();

  const {
    profile: { walletAddress },
    balances,
  } = useAppSelector(selector);

  const [assetListVisible, setAssetListVisible] = useState<boolean>(false);
  const [form, setForm] = useState<ExchangeForm>({
    to: "",
    asset: "eur",
    amount: 0,
  });

  const changeFormHandler = (
    field: keyof ExchangeForm,
    value: string | number
  ) => {
    setForm({ ...form, [field]: value });
  };

  const setMaxAssets = (assets: keyof BalancesInfo) => {
    setForm({ ...form, amount: balances[assets] });
  };

  const getAssetIcon = (assets: string) => {
    switch (assets) {
      case "eur":
        return "/images/eur.png";
      case "yen":
        return "/images/yen.png";
      case "usd":
        return "/images/usd.png";
      default:
        return "/images/eur.png";
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <FormField
            leftTitle="From"
            value={`My Wallet (${walletAddress})`}
            disabled
          />
          <FormField
            leftTitle="To"
            value={form.to}
            onChange={(e) => changeFormHandler("to", e.target.value)}
          />
          <FormField
            leftTitle="Assets"
            leftComponent={
              <Image
                width={24}
                height={24}
                src={getAssetIcon(form.asset)}
                alt="asset-icon"
              />
            }
            rightComponent={
              <Image
                width={24}
                height={24}
                src={require("./assets/layers.png")}
                alt="asset-change"
                onClick={() => setAssetListVisible(true)}
              />
            }
            value={form.asset.toUpperCase()}
            onChange={() => {}}
          />
          <FormField
            type="number"
            leftTitle="Amount"
            rightTitle="available: 50 EUR"
            value={form.amount.toString()}
            rightComponent={
              <Image
                width={41}
                height={20}
                src={require("./assets/max.png")}
                alt="asset-change"
                onClick={() => setMaxAssets(form.asset)}
              />
            }
            onChange={(e) => changeFormHandler("amount", e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <Button type="inactive" onClick={() => router.back()}>
            Cancle
          </Button>
          <Button type="active" onClick={() => {}}>
            Send
          </Button>
        </div>
      </div>
      {/* <ChangeAssetFieldModal isOpen={true} /> */}
    </>
  );
};

export default Exchange;
