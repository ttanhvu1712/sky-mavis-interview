import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { AssetTicket, Modal } from "src/components";
import { useAppSelector } from "src/slices/hooks";
import { selector } from "src/slices/userInfoSlice";
import type { BalancesInfo } from "src/types";
import styles from "./ChangeAssetFieldModal.module.scss";
import clsx from "clsx";

type ChangeAssetFieldModalProps = {
  isOpen?: boolean;
  currentAsset?: keyof BalancesInfo;
  onChange?: (asset: string) => void;
  onClose?: () => void;
};

const ChangeAssetFieldModal: React.FC<ChangeAssetFieldModalProps> = ({
  isOpen,
  onChange,
  onClose,
  currentAsset,
}) => {
  const { balances } = useAppSelector(selector);

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Assets</div>
          <div className={styles.closeIcon}>
            <Image
              src={require("./assets/close.png")}
              width={24}
              height={24}
              alt="close"
              onClick={onClose}
            />
          </div>
        </div>
        <div className={styles.list}>
          {Object.keys(balances).map((name) => (
            <AssetTicket
              className={clsx(styles.ticket, {
                [styles.highlight]: currentAsset === name,
              })}
              key={name}
              asset={name as keyof BalancesInfo}
              onClick={() => onChange && onChange(name)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ChangeAssetFieldModal;
