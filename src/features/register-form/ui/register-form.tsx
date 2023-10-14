import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent, useEffect } from "react";
import { registerForm } from "../model/registration-form-state.ts";
import { setAuthStatus } from "@/entities/auth-status/lib/auth-status-events.ts";
import { useStore } from "effector-react/effector-react.mjs";
import { $isAuth } from "@/entities/auth/model/auth.ts";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    redirect();
  };

  const redirect = () => {
    if (
      fields.email?.firstError ||
      fields.password?.firstError ||
      fields.username?.errors ||
      fields.repeatPassword?.firstError
    ) {
      setAuthStatus("error");
    }
  };
  useEffect(() => {
    redirect();
    if (isAuth) {
      navigate(CALENDAR_ROUTE);
      setAuthStatus("success");
    }
  }, [isAuth]);
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <TextField
        label="Email*:"
        placeholder="Enter your email"
        labelClassName={"text-secondaryColor"}
        value={fields.email.value}
        error={fields.email.firstError?.rule}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username*:"
        placeholder="Enter your username"
        labelClassName={"text-secondaryColor"}
        value={fields.username.value}
        error={fields.username.firstError?.rule}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password*:"
        placeholder="Enter your password"
        labelClassName={"text-secondaryColor"}
        value={fields.password.value}
        error={fields.password.firstError?.rule}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <TextField
        label="Repeat password*:"
        placeholder="Repeat the password"
        labelClassName={"text-secondaryColor"}
        value={fields.repeatPassword.value}
        error={fields.repeatPassword.firstError?.rule}
        onChange={(e) => fields.repeatPassword.onChange(e.target.value)}
      />
      <button
        className="bg-secondaryColor text-white rounded-2xl shadow-buttonRegister text-36px font-bold"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
