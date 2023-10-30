import { InputHTMLAttributes, useState } from "react";
import styles from "./text-field.module.scss";
import clsx from "clsx";
import { errorsList } from "@/shared/lib/errors-list.ts";
const TextField = ({
  label,
  type,
  placeholder,
  labelClassName,
  error,
  sizes,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: string | null;
  placeholder?: string;
  sizes?: number;
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
      ? "absolute bottom-[38px] left-[14px]"
      : rest.value
      ? "absolute bottom-[38px] left-[14px]"
      : "absolute bottom-[21px] left-[14px]"
  );
  const placeHolderClassNameSize = clsx(
    styles.placeholder,
    isFocus
      ? "absolute top-[21px] left-[14px]"
      : rest.value
      ? "absolute top-[21px] left-[14px]"
      : "absolute top-[35px] left-[14px]"
  );
  return (
    <div className="flex flex-col gap-2 relative w-full h-full">
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
        className={clsx(
          styles.root,
          sizes && `h-[${sizes}px] block w-full clear-both whitespace-normal`,
          "h-[60px]"
        )}
        onFocus={onFocus}
        onBlur={onBlur}
        id={label}
        type={type}
      />
      <p
        className={clsx(
          placeHolderClassName,
          sizes && placeHolderClassNameSize
        )}
      >
        {placeholder}
      </p>
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
