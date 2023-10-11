import { forward } from "effector";
import { createForm } from "effector-forms";

import { checkEmail, checkLength, required } from "@/shared/lib/validators";
import { loginFx } from "@/entities/auth/lib/auth-effects.ts";

export const loginForm = createForm({
  fields: {
    username: {
      init: "",
      rules: [required(), checkEmail()],
    },
    email: {
      init: "",
      rules: [required(), checkEmail()],
    },
    password: {
      init: "",
      rules: [required(), checkLength(6, 20)],
    },
  },
  validateOn: ["submit"],
});

forward({
  from: loginForm.formValidated,
  to: loginFx,
});
