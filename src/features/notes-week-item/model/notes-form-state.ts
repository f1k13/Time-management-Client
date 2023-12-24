import { createForm } from "effector-forms";

import { required } from "@/shared/lib/validators";

export const notesForm = createForm({
  fields: {
    title: {
      init: "",
      rules: [required()],
    },
  },
  validateOn: ["submit"],
});
