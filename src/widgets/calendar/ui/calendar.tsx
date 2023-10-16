import { CalendarCell } from "@/features/calendar-cell/ui";
import { CalendarData } from "../lib/calendar-data";

const Calendar = () => {
  console.log(CalendarData());
  return (
    <div className="p-[16px]">
      <h1 className="text-white text-32px font-medium">Calendar</h1>
      <div className="grid grid-cols-8 mt-[48px]  ">
        {CalendarData().map((item, index) => (
          <CalendarCell key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
