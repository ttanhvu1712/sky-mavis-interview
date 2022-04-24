import React from "react";
import type { InputFieldProps } from "../InputField";
import InputField from "../InputField";
import styles from "./FormField.module.scss";
import clsx from "clsx";

type FormFieldProps = InputFieldProps & {
  leftTitle?: string;
  rightTitle?: string;
  className?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  leftTitle,
  rightTitle,
  className,
  ...restProps
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.title}>
        <span>{leftTitle}</span>
        <span>{rightTitle}</span>
      </div>
      <InputField {...restProps} />
    </div>
  );
};

export default FormField;
