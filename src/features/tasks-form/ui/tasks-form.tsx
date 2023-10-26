import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { taskForm } from "../model/tasks-form-state";

const TasksForm = () => {
  const { fields, submit } = useForm(taskForm);
  const onSubmit = () => {
    submit();
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={fields.title.value}
        onChange={(e) => fields.title.onChange(e.target.value)}
        placeholder="Title*"
      />
      <TextField
        value={fields.description.value}
        onChange={(e) => fields.description.onChange(e.target.value)}
        placeholder="Description*"
        height={150}
      />
    </form>
  );
};

export default TasksForm;
