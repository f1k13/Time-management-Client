import { createForm } from "effector-forms";

import { required } from "@/shared/lib/validators";


export const taskForm = createForm({
  fields: {
    title: {
      init: "",
      rules: [required()],
    },
    description: {
      init: "",
      rules: [required()],
    },
  },
  validateOn: ["submit"],
});

