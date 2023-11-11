import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { taskForm } from "../model/tasks-form-state";
import { addAlert } from "@/entities/alert/lib/alert-events";
import { FormEvent, useState } from "react";
import { InputSelect } from "@/shared/ui/input-select";
import { createTaskFx } from "../lib/task-effect";
import { useStore } from "effector-react/effector-react.umd";
import { $user } from "@/entities/user/model/user";

const TasksForm = ({ item }: { item?: string }) => {
  const { fields, submit } = useForm(taskForm);
  const [select, setSelect] = useState("Select type task");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useStore($user);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (!fields.title.firstError || !fields.description.firstError) {
      addAlert({
        type: "success",
        text: "Task added",
      });
      if (user) {
        createTaskFx({
          title: fields.title.value,
          description: fields.description.value,
          calendarDate: item || "",
          type: select,
          userId: user.id,
        });
      }
    } else {
      addAlert({
        type: "error",
        text: "This fields is requeired",
      });
    }
  };
  const optionsColor = [
    { id: "red", selectName: "important" },
    { id: "green", selectName: "It doesn't matter" },
    { id: "blue", selectName: "Average importance" },
  ];
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
      />
      <InputSelect
        onChange={(e) => setSelect(e)}
        options={optionsColor}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        select={select}
      />
      <button
        className=" text-center py-2 transition-colors duration-300 bg-mainColorAccent  rounded-xl text-20px text-white font-bold hover:bg-textSecondary"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TasksForm;
