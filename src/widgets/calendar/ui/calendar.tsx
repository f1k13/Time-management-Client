import { CalendarCell } from "@/features/calendar-cell/ui";
import { calendarData } from "../lib/calendar-data";
import { useCallback } from "react";

const Calendar = () => {
  const data = useCallback(() => calendarData(), []);
  return (
    <div className="p-[16px]">
      <h1 className="text-white text-32px font-medium">Calendar</h1>
      <div className="grid grid-cols-7 grid-rows-5 mt-[48px]  ">
        {data().map((item, index) => (
          <CalendarCell key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
