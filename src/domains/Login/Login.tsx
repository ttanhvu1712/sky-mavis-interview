import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, FormField, PaperFall } from "src/components";
import { useAppDispatch, useAppSelector } from "src/slices/hooks";
import { actions, selector } from "src/slices/userInfoSlice";
import styles from "./Login.module.scss";

const { userLogin } = actions;

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { asyncActionPending, loginStatus } = useAppSelector(selector);
  const isLoginPending = asyncActionPending === "userLogin";

  const [passwords, setPasswords] = useState<string>("");
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  useEffect(() => {
    if (loginStatus === "login") router.push("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value);
  };

  const unlockHandler = () => {
    dispatch(userLogin({ passwords }));
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
        type={showPasswords ? "text" : "password"}
        leftTitle={"ENTER PASSPORT"}
        rightTitle={"available: 50 EUR"}
        rightComponent={
          <Image
            className={styles.eyeButton}
            src={require("./assets/eye.png")}
            width={24}
            height={24}
            alt="icon-eye"
            onClick={(e) => setShowPasswords(!showPasswords)}
          />
        }
      />
      <Button
        onClick={unlockHandler}
        type={"active"}
        size={"small"}
        loading={isLoginPending}
        className={styles.unlock}
        disabled={passwords.length === 0}
      >
        Unlock
      </Button>
    </div>
  );
};

export default Login;
