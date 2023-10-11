import { CALENDAR_ROUTE, LOGIN_ROUTE } from "@/app/routes/paths";
import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginForm } from "../model/login-validation";
import { useStore } from "effector-react/effector-react.mjs";
import { $status } from "@/entities/error/model/status";
import {
  setErrorEvent,
  setSuccessEvent,
} from "@/entities/error/lib/status-events";
import { ErrorAlertHandler } from "@/shared/ui/error-alert-handler";

const LoginForm = () => {
  const { fields, submit } = useForm(loginForm);
  const navigate = useNavigate();
  const status = useStore($status);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (fields.email.firstError && fields.password.firstError) {
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 4000);
      setErrorEvent();
    } else {
      setTimeout(() => {
        navigate(CALENDAR_ROUTE);
      }, 4000);
      setSuccessEvent();
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      {status && <ErrorAlertHandler status={status} />}
      <TextField
        label="Email"
        placeholder="Enter your email"
        labelColor="#0E7DFF"
        value={fields.email.value}
        error={fields.email.firstError}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        labelColor="#0E7DFF"
        value={fields.password.value}
        error={fields.password.firstError}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <button
        className="bg-loginColor text-white rounded-2xl shadow-buttonLogin text-36px"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
