import { TextField } from "@/shared/ui/text-field";
import { FormEvent } from "react";
import { registerForm } from "../lib/registration-valid";
import { useForm } from "effector-forms";
import {  useNavigate } from "react-router-dom";
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
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        value={fields.username.value}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
