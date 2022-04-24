import React from "react";
import styles from "./NavBarLayout.module.scss";

type NavBarLayoutProps = {
  children: React.ReactNode;
};

const NavBarLayout: React.FC<NavBarLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default NavBarLayout;
