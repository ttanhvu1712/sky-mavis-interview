import React from "react";
import styles from "./InputField.module.scss";
import clsx from "clsx";

export type InputFieldProps = {
  value: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  leftComponent?: React.ReactElement;
  rightComponent?: React.ReactElement;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField: React.FC<InputFieldProps> = ({
  value,
  disabled = false,
  type = "text",
  leftComponent,
  rightComponent,
  onChange,
}) => {
  return (
    <div className={clsx(styles.container, { [styles.disabled]: disabled })}>
      {!!leftComponent ? leftComponent : null}
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {!!rightComponent ? rightComponent : null}
    </div>
  );
};

export default InputField;
