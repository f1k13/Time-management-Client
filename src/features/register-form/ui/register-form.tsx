import { TextField } from "@/shared/ui/text-field";
import { FormEvent } from "react";
import { registerForm } from "../model/registration-validation.ts";
import { useForm } from "effector-forms";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths";
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
      <TextField
        label="Email"
        placeholder="Enter your email"
        labelColor="#66FFE3"
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username"
        placeholder="Enter your username"
        labelColor="#66FFE3"
        value={fields.username.value}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        labelColor="#66FFE3"
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <TextField
        label="Repeat password"
        placeholder="Repeat the password"
        labelColor="#66FFE3"
        value={fields.repeatPassword.value}
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
