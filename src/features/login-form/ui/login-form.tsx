import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent, useEffect, useState } from "react";
import { loginForm } from "../model/login-form-state.ts";

import { $isAuth } from "@/entities/auth/model/auth.ts";
import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

const LoginForm = () => {
  const { fields, submit } = useForm(loginForm);
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);

  const isAuth = useStore($isAuth);
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  useEffect(() => {
    if (isAuth) {
      navigate(CALENDAR_ROUTE);
    }
  }, [isAuth]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <TextField
        label="Email*:"
        placeholder="Enter your email"
        value={fields.email.value}
        labelClassName={"text-mainColorAccent"}
        error={fields.email.firstError?.rule}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Password*:"
        placeholder="Enter your password"
        labelClassName={"text-mainColorAccent"}
        value={fields.password.value}
        error={fields.password.firstError?.rule}
        onChange={(e) => fields.password.onChange(e.target.value)}
        type="password"
        isVisible={isVisiblePass}
        setIsVisible={setIsVisiblePass}
        eye={true}
      />
      <button
        className="bg-mainColorAccent transition-colors duration-200 shadow-outlineMain text-white rounded-2xl text-36px font-bold hover:bg-mainColorAccentSecondary hover:shadow-outlineHover"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
