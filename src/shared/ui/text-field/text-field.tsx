import { InputHTMLAttributes, useState } from "react";
import styles from "./text-field.module.scss";

import { errorsList } from "@/shared/lib/errors-form-list";
const TextField = ({
  label,
  type,
  placeholder,
  color,
  error,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: string | null;
  placeholder?: string;
  color?: string | null;
} & InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const placeHolderClassName = `${styles.placeholder} ${
    isFocus
      ? styles.placeholderActive
      : rest.value
      ? styles.placeholderActive
      : styles.placeholderInActive
  }`;
  return (
    <div className="flex flex-col gap-2 relative w-full">
      <label className={`label text-${color}`} htmlFor={label}>
        {label}
      </label>
      <input
        {...rest}
        className={styles.root}
        onFocus={onFocus}
        onBlur={onBlur}
        id={label}
        type={type}
      />
      <p className={placeHolderClassName}>{placeholder}</p>
      {error && (
        <p className="absolute text-errorColor top-[100px]">
          {errorsList[error]}
        </p>
      )}
    </div>
  );
};

export default TextField;
