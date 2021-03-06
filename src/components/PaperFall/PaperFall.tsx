import React from "react";
import styles from "./PaperFall.module.scss";

type PaperFallProp = {
  numberOfFlake: number;
};

const PaperFall: React.FC<PaperFallProp> = ({ numberOfFlake }) => {
  return (
    <>
      {new Array(numberOfFlake).fill(1).map((_, idx) => (
        <div key={idx} className={styles.flake} />
      ))}
    </>
  );
};

export default PaperFall;
