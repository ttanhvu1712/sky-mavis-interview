import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import clsx from "clsx";

type ModalProps = {
  isOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, className, children }) => {
  const el = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    el.current = document.querySelector("#__modal");
    setMounted(true);
    return () => void setMounted(false);
  }, []);

  return isOpen && mounted && !!el.current
    ? ReactDOM.createPortal(
        <div className={clsx(styles.container, className)}>{children}</div>,
        el.current as HTMLDivElement
      )
    : null;
};

export default Modal;
