import { InputSelect } from "@/shared/ui/input-select";
import { useState } from "react";
import { deleteTaskFx } from "@/features/calendar-task-item/lib/delete-task.ts";
import { addAlert } from "@/entities/alert/lib/alert-events.ts";

type CalendarTask = {
  id: number;
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

const CalendarTaskItem = ({
  date,
  item,
}: {
  date?: string;
  item: CalendarTask;
}) => {
  const options = [{ id: item.id, selectName: item.description }];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const deleteTask = (id: number) => {
    setActive(!active);
    deleteTaskFx(id);
    addAlert({ type: "success", text: "Task closed" });
  };
  return (
    <div className="w-full px-5 mt-2">
      {date === String(item.calendarDate) && (
        <InputSelect
          checkBox={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          select={item.title}
          options={options}
          colorSelect={item.type}
          active={active}
          onChange={(id) => deleteTask(Number(id))}
        />
      )}
    </div>
  );
};

export default CalendarTaskItem;
