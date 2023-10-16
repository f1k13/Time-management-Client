import { CalendarCell } from "@/features/calendar-cell/ui";
import { calendarData } from "../lib/calendar-data";
import { useState } from "react";
import moment from "moment";
import { CalendarController } from "@/features/calendar-controller/ui";

const Calendar = () => {
  const today = moment();
  const [currentMonth, setCurrentMonth] = useState(today);
  const month = currentMonth.format("MMMM");
  console.log(today);
  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, "months"));
  };
  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, "months"));
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="p-[16px] w-full h-auto min-h-full flex flex-col">
      <h1 className="text-white text-32px font-medium">Calendar</h1>
      <CalendarController
        month={month}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <div className="flex justify-between">
        {days.map((day) => (
          <p key={day}>{day}</p>
        ))}
      </div>
      <div className="grid grid-cols-8  ">
        {calendarData(currentMonth).map((item, index) => (
          <CalendarCell key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
