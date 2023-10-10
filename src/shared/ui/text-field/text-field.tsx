import { InputHTMLAttributes } from "react";
import styles from "./text-field.module.scss";
const TextField = ({
  label,
  type,
  placeholder,
  labelColor,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: string;
  placeholder?: string;
  labelColor?: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="label" htmlFor={label} style={{ color: labelColor }}>
        {label}
      </label>
      <input
        {...rest}
        className={styles.root}
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
