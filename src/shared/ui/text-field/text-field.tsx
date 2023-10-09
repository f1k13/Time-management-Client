import { InputHTMLAttributes } from "react";

const TextField = ({
  label,
  type,
  ...rest
}: {
  label?: string;
  type?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  
  return (
    <div>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input {...rest} className="root" id={label} type={type} />
    </div>
  );
};

export default TextField;
