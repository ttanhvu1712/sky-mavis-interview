import React from "react";
import styles from "./BouncingDots.module.scss";
import clsx from "clsx";

type BouncingDotsProps = {
  className?: string;
};

const BouncingDots: React.FC<BouncingDotsProps> = ({ className }) => {
  return (
    <div className={clsx(styles.spinner, className)}>
      <div className={clsx(styles.child, styles.bounce1)} />
      <div className={clsx(styles.child, styles.bounce2)} />
      <div className={clsx(styles.child, styles.bounce3)} />
    </div>
  );
};

export default BouncingDots;
