import { InputSelect } from "@/shared/ui/input-select";
import { useState } from "react";

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
  deleteTask,
}: {
  date?: string;
  item: CalendarTask;
  deleteTask: (id: number) => void;
}) => {
  const options = [{ id: item.id, selectName: item.description }];
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          onChange={(id) => deleteTask(Number(id))}
        />
      )}
    </div>
  );
};

export default CalendarTaskItem;
