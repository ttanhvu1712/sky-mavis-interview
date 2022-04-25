import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "src/slices/hooks";
import { actions, selector } from "src/slices/userInfoSlice";
import styles from "./UserStatusBarLayout.module.scss";

const { userLogout } = actions;

type UserStatusBarLayoutProps = {
  children: React.ReactNode;
};

const UserStatusBarLayout: React.FC<UserStatusBarLayoutProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    profile: { userName },
  } = useAppSelector(selector);

  const logout = () => {
    router.replace("/login");
    dispatch(userLogout());
  };

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
          onClick={logout}
        />
      </div>
      {children}
    </div>
  );
};

export default UserStatusBarLayout;
