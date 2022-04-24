import React, { useState } from "react";
import { FormField, PaperFall } from "src/components";
import Image from "Next/image";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [passwords, setPasswords] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value)
  };

  return (
    <div className={styles.container}>
      <PaperFall numberOfFlake={20} />
      <Image
        className={styles.iconRonin}
        src={require("./assets/ronin-fullcolor.png")}
        width={160}
        height={160}
        alt="icon-ronin"
      />
      <div className={styles.title}>Ronin Wallet</div>
      <div className={styles.subTitle}>Your Digital Passport</div>
      <FormField
        className={styles.passwords}
        value={passwords}
        onChange={changeHandler}
        type={"password"}
        leftTitle={"ENTER PASSPORT"}
        rightTitle={"available: 50 EUR"}
        // leftComponent={<image className={styles.eyeButton} src={}/>}
      />
    </div>
  );
};

export default Login;
