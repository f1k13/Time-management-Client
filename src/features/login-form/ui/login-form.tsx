import { CALENDAR_ROUTE } from "@/app/routes/paths";
import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginForm } from "../model/login-validation";
import { useStore } from "effector-react/effector-react.mjs";
import { $isAuth } from "@/entities/auth/model/auth";
import { setNotificationEvent } from "@/entities/notification/lib/notification-events";

const LoginForm = () => {
  const { fields, submit } = useForm(loginForm);
  const navigate = useNavigate();
  const isAuth = useStore($isAuth);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (isAuth) {
      setNotificationEvent({
        status: "success",
        text: "Successfully logged in",
      });
      navigate(CALENDAR_ROUTE);
    } else {
      setNotificationEvent({
        status: "error",
        text: "Wrong email or password",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
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
