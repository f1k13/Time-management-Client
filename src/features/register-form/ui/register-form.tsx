import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { registerForm } from "../model/registration-validation.ts";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

import ErrorAlertHandler from "@/shared/ui/notification-handler/notification-handler.tsx";

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    navigate(CALENDAR_ROUTE);
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      {status && <ErrorAlertHandler status={status} />}
      <TextField
        label="Email"
        placeholder="Enter your email"
        labelColor="#66FFE3"
        value={fields.email.value}
        error={fields.email.firstError}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username"
        placeholder="Enter your username"
        labelColor="#66FFE3"
        value={fields.username.value}
        error={fields.username.firstError}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        labelColor="#66FFE3"
        value={fields.password.value}
        error={fields.password.firstError}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <TextField
        label="Repeat password"
        placeholder="Repeat the password"
        labelColor="#66FFE3"
        value={fields.repeatPassword.value}
        error={fields.repeatPassword.firstError}
        onChange={(e) => fields.repeatPassword.onChange(e.target.value)}
      />
      <button
        className="bg-labelColor text-white rounded-2xl shadow-buttonRegister text-36px"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
