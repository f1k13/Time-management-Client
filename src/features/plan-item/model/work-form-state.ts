import { createForm } from "effector-forms";

import { required } from "@/shared/lib/validators";

export const workForm = createForm({
  fields: {
    startTime: {
      init: "",
      rules: [required()],
    },
    endTime: {
      init: "",
      rules: [required()],
    },
  },
  validateOn: ["submit"],
});
