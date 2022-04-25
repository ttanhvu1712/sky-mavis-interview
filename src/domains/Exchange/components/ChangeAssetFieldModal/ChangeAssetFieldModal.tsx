import React from "react";
import ReactDOM from "react-dom";
import styles from "./ChangeAssetFieldModal.module.scss";

type ChangeAssetFieldModalProps = {
  isOpen?: boolean;
  onChange?: (asset: string) => void;
};

const ChangeAssetFieldModal: React.FC<ChangeAssetFieldModalProps> = ({
  isOpen,
  onChange,
}) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles.container}>ChangeAssetFieldModal</div>,
        document.querySelector("#__modal")!
      )
    : null;
};

export default ChangeAssetFieldModal;
