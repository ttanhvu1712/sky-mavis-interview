import React from "react";
import styles from "./Button.module.scss";
import BouncingDots from "../BouncingDots";
import clsx from "clsx";

type ButtonProps = {
  type?: "active" | "inactive";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  type = "active",
  size = "medium",
  loading = false,
  disabled = false,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.container, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.active]: type === "active",
        [styles.inactive]: type === "inactive",
      })}
      disabled={disabled}
    >
      <div className={styles.text}>
        {!loading ? children : <BouncingDots className={styles.loading} />}
      </div>
    </button>
  );
};

export default Button;
