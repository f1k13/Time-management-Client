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
}: {
  date?: string;
  item: CalendarTask;
}) => {
  const options = [{ id: "1", selectName: item.description }];
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="w-full px-5 mt-2">
      {date === String(item.calendarDate) && (
        <InputSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          select={item.title}
          options={options}
          colorSelect={item.type}
        />
      )}
    </div>
  );
};

export default CalendarTaskItem;
