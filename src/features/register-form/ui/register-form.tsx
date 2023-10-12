import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent } from "react";
import { registerForm } from "../model/registration-form-state.ts";

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <TextField
        label="Email*:"
        placeholder="Enter your email"
        color="secondaryColor"
        value={fields.email.value}
        error={fields.email.firstError?.rule}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username*:"
        placeholder="Enter your username"
        color="secondaryColor"
        value={fields.username.value}
        error={fields.username.firstError?.rule}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password*:"
        placeholder="Enter your password"
        color="secondaryColor"
        value={fields.password.value}
        error={fields.password.firstError?.rule}
        onChange={(e) => fields.password.onChange(e.target.value)}
      />
      <TextField
        label="Repeat password*:"
        placeholder="Repeat the password"
        color="secondaryColor"
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
