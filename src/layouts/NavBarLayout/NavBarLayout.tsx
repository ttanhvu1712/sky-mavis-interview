import React from "react";
import Image from "next/image";
import styles from "./NavBarLayout.module.scss";
import { useRouter } from "next/router";

type NavBarLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const NavBarLayout: React.FC<NavBarLayoutProps> = ({ children, title }) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.leftButton}>
          <Image
            src={require("./assets/left.png")}
            width={32}
            height={32}
            alt="left-button"
            onClick={() => router.back()}
          />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default NavBarLayout;
