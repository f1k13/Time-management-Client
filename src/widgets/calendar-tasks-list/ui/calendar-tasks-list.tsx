import { $user } from "@/entities/user/model/user";
import { useStore } from "effector-react/effector-react.umd";
import CalendarTaskItem from "./calendar-task-item";
const CalendarTasksList = ({ date }: { date?: string }) => {
  const user = useStore($user);
  console.log(user);
  return (
    <div>
      {user?.tasks?.map((item, index) => (
        <CalendarTaskItem item={item} index={index} date={date} />
      ))}
    </div>
  );
};

export default CalendarTasksList;
