import React from "react";
import { Button, Modal } from "src/components";
import type { BalancesInfo } from "src/types";
import styles from "./ExchangeSuccessModal.module.scss";

type ExchangeSuccessModalProps = {
  isOpen?: boolean;
  asset?: keyof BalancesInfo;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

const ExchangeSuccessModal: React.FC<ExchangeSuccessModalProps> = ({
  isOpen,
  asset,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div className={styles.container}>
        <div className={styles.title}>Successfully sent</div>
        <div className={styles.description}>
          Your <b>{asset?.toUpperCase()}</b> has been sent! <br />
          Thank you for using our service
        </div>
        <Button className={styles.button} type="active" size="large" onClick={onClose}>
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default ExchangeSuccessModal;
