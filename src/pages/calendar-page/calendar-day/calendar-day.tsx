import { CalendarTasks } from "@/widgets/calendar-tasks/ui";
import { useParams } from "react-router-dom";

const CalendarDay = () => {
  const { id } = useParams();
  return (
    <div>
      <CalendarTasks item={id} />
    </div>
  );
};

export default CalendarDay;
