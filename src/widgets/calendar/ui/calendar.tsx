import { CalendarCell } from "@/features/calendar-cell/ui";
import { calendarData } from "../lib/calendar-data";
import { useEffect, useState } from "react";
import moment from "moment";
import { CalendarController } from "@/features/calendar-controller/ui";
import { useStore } from "effector-react";
import { getTasksCells } from "@/widgets/calendar/lib/get-tasks-cells.ts";
import { $user } from "@/entities/user/model/user.ts";
import { $calendarTasksCell } from "@/widgets/calendar/model/calendar-tasks-cells.ts";

const Calendar = () => {
  const today = moment();
  const [currentMonth, setCurrentMonth] = useState(today);
  const month = currentMonth.format("MMMM");
  const year = currentMonth.format("YYYY");
  const user = useStore($user);
  const tasksCells = useStore($calendarTasksCell);
  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, "months"));
  };

  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, "months"));
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    getTasksCells(user.id);
  }, []);
  return (
    <div className=" w-full p-[5px] h-full flex flex-col">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-white text-32px ml-2 font-medium">Calendar</h1>
        <CalendarController
          month={month}
          year={year}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
      </div>
      <div className="w-full flex justify-around mt-[48px]">
        {days.map((day) => (
          <p key={day} className="pl-[11%] text-white text-12px font-normal">
            {day}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-7 ">
        {calendarData(currentMonth).map((item, index) => (
          <CalendarCell
            tasks={tasksCells}
            key={index}
            index={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
