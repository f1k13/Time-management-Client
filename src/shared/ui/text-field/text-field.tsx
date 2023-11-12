import { InputHTMLAttributes, useState } from "react";
import styles from "./text-field.module.scss";
import clsx from "clsx";
import { errorsList } from "@/shared/lib/errors-list.ts";
const TextField = ({
  label,
  type,
  placeholder,
  labelClassName,
  className,
  rootClassName,
  error,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: string | null;
  className?: string;
  rootClassName?: string;
  placeholder?: string;
  labelClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const placeHolderClassName = clsx(
    styles.placeholder,
    isFocus
      ? styles.placeholderActive
      : rest.value
      ? styles.placeholderActive
      : styles.placeholderInActive
  );

  return (
    <div
      className={clsx("flex flex-col gap-2 relative w-full h-full", className)}
    >
      <label
        className={clsx(
          labelClassName,
          "text-14px font-bold text-mainColorAccent"
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...rest}
        className={clsx(styles.root, "h-[60px]", rootClassName)}
        onFocus={onFocus}
        onBlur={onBlur}
        id={label}
        type={type}
      />
      <p className={clsx(placeHolderClassName)}>{placeholder}</p>
      <p
        className={clsx(
          "absolute text-errorColor right-0 font-medium bottom-[-25px] transition opacity-0",
          error && "opacity-100"
        )}
      >
        {errorsList[error || ""]}
      </p>
    </div>
  );
};

export default TextField;
