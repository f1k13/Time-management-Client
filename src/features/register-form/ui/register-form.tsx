import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { FormEvent, useEffect, useState } from "react";
import { registerForm } from "../model/registration-form-state.ts";
import { useStore } from "effector-react/effector-react.mjs";
import { $isAuth } from "@/entities/auth/model/auth.ts";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

const RegisterForm = () => {
  const { fields, submit } = useForm(registerForm);
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);
  const [isVisibleRepeatPass, setIsVisibleRepeatPass] =
    useState<boolean>(false);

  const isAuth = useStore($isAuth);
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  useEffect(() => {
    if (isAuth) {
      navigate(CALENDAR_ROUTE);
    }
  }, [isAuth]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10 ">
      <TextField
        label="Email*:"
        placeholder="Enter your email"
        labelClassName={"text-mainColorAccent"}
        value={fields.email.value}
        error={fields.email.firstError?.rule}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <TextField
        label="Username*:"
        placeholder="Enter your username"
        labelClassName={"text-mainColorAccent"}
        value={fields.username.value}
        error={fields.username.firstError?.rule}
        onChange={(e) => fields.username.onChange(e.target.value)}
      />
      <TextField
        label="Password*:"
        placeholder="Enter your password"
        labelClassName={"text-mainColorAccent"}
        value={fields.password.value}
        error={fields.password.firstError?.rule}
        isVisible={isVisiblePass}
        setIsVisible={setIsVisiblePass}
        onChange={(e) => fields.password.onChange(e.target.value)}
        type="password"
        eye={true}
      />
      <TextField
        label="Repeat password*:"
        placeholder="Repeat the password"
        labelClassName={"text-mainColorAccent"}
        value={fields.repeatPassword.value}
        error={fields.repeatPassword.firstError?.rule}
        isVisible={isVisibleRepeatPass}
        setIsVisible={setIsVisibleRepeatPass}
        onChange={(e) => fields.repeatPassword.onChange(e.target.value)}
        type="password"
        eye={true}
      />
      <button
        className="bg-mainColorAccent transition-colors duration-200 shadow-outlineMain text-white rounded-2xl text-36px font-bold hover:bg-mainColorAccentSecondary hover:shadow-outlineHover"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
