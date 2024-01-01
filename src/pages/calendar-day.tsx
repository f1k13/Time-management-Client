import { CalendarTasksList } from "@/widgets/calendar-tasks-list/ui";
import { CalendarTasks } from "@/widgets/calendar-tasks/ui";
import { useParams } from "react-router-dom";

const CalendarDay = () => {
  const { id } = useParams();
  
  return (
    <div className="flex p-10">
      <CalendarTasks item={id} />
      <CalendarTasksList date={id} />
    </div>
  );
};

export default CalendarDay;
