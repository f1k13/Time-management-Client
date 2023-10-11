import { InputHTMLAttributes } from "react";
import styles from "./text-field.module.scss";
import { FormErrorHandler } from "../form-error-handler";
import { ValidationError } from "effector-forms";
const TextField = ({
  label,
  type,
  placeholder,
  labelColor,
  error,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: ValidationError<string> | null;
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
      {error && <FormErrorHandler error={error} />}
    </div>
  );
};

export default TextField;
