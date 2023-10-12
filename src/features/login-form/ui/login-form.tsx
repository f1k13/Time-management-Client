import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent, useEffect } from "react";
import { loginForm } from "../model/login-form-state.ts";
import { setAuthStatus } from "@/entities/auth-status/lib/auth-status-events.ts";
import { $isAuth } from "@/entities/auth/model/auth.ts";
import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

const LoginForm = () => {
  const { fields, submit } = useForm(loginForm);
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (fields.email?.errors || fields.password?.errors) {
      setAuthStatus("error");
    }
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate(CALENDAR_ROUTE);
  //   }
  // }, [isAuth]);

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
      />
      <button
        className="bg-mainColorAccent font-bold text-white rounded-2xl shadow-buttonLogin text-36px"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
