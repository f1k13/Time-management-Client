import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { taskForm } from "../model/tasks-form-state";
import { addAlert } from "@/entities/alert/lib/alert-events";
import { FormEvent } from "react";

const TasksForm = () => {
  const { fields, submit } = useForm(taskForm);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    console.log(fields.title.firstError);
    if (
      !fields.title.firstError ||
      !fields.description.firstError
    ) {
      addAlert({
        type: "success",
        text: "Task added",
      });
    } else {
      addAlert({
      type: "error",
      text: "This fields is requeired",
    });
    }
    
  };
  return (
    <form className="w-full h-full flex flex-col gap-10" onSubmit={onSubmit}>
      <TextField
        value={fields.title.value}
        onChange={(e) => fields.title.onChange(e.target.value)}
        placeholder="Title*"
      />
      <TextField
        value={fields.description.value}
        onChange={(e) => fields.description.onChange(e.target.value)}
        placeholder="Description*"
        sizes={150}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TasksForm;
