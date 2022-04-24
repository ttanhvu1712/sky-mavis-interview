import React from "react";
import Image from "next/image";
import { useAppSelector } from "src/slices/hooks";
import { selector } from "src/slices/userInfoSlice";
import styles from "./UserStatusBarLayout.module.scss";

type UserStatusBarLayoutProps = {
  children: React.ReactNode;
};

const UserStatusBarLayout: React.FC<UserStatusBarLayoutProps> = ({
  children,
}) => {
  const {
    profile: { userName },
  } = useAppSelector(selector);

  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>
        <div className={styles.name}>{userName}</div>
        <Image
          className={styles.avatar}
          src={require("./assets/avatarDefault.png")}
          width={32}
          height={32}
          alt={""}
        />
      </div>
      {children}
    </div>
  );
};

export default UserStatusBarLayout;
