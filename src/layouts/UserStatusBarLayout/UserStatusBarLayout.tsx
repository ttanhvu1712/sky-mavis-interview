import React from "react";
import styles from "./UserStatusBarLayout.module.scss";

type UserStatusBarLayoutProps = {
  children: React.ReactNode;
};

const UserStatusBarLayout: React.FC<UserStatusBarLayoutProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default UserStatusBarLayout;
