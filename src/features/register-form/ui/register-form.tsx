import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { registerForm } from "../model/registration-validation.ts";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";
import { useStore } from "effector-react/effector-react.umd";
import { setNotificationEvent } from "@/entities/notification/lib/notification-events.ts";
import { $isAuth } from "@/entities/auth/model/auth.ts";

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (isAuth) {
      navigate(CALENDAR_ROUTE);
      setNotificationEvent({
        status: "success",
        text: "Successfully register in",
      });
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
        color="secondaryColor"
        value={fields.email.value}
        error={fields.email.firstError?.rule}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username"
        placeholder="Enter your username"
        color="secondaryColor"
        value={fields.username.value}
        error={fields.username.firstError?.rule}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        color="secondaryColor"
        value={fields.password.value}
        error={fields.password.firstError?.rule}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <TextField
        label="Repeat password"
        placeholder="Repeat the password"
        color="secondaryColor"
        value={fields.repeatPassword.value}
        error={fields.repeatPassword.firstError?.rule}
        onChange={(e) => fields.repeatPassword.onChange(e.target.value)}
      />
      <button
        className="bg-secondaryColor text-white rounded-2xl shadow-buttonRegister text-36px"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
