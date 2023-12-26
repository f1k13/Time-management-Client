import { useStore } from "effector-react/effector-react.umd";
import { ArrowRight } from "@/shared/ui/icons";
import { useNavigate } from "react-router-dom";
import { CalendarTaskItem } from "@/features/calendar-task-item/ui";
import { $calendarTasks } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
import styles from "../styles/tasks-list.module.scss";
import clsx from "clsx";
import { useEffect } from "react";
import { getTasksFx } from "@/widgets/calendar-tasks-list/lib/get-tasks-effect.ts";
import { $user } from "@/entities/user/model/user.ts";

const CalendarTasksList = ({ date }: { date?: string }) => {
  const tasks = useStore($calendarTasks);
  const navigate = useNavigate();
  const user = useStore($user);
  useEffect(() => {
    if (date && user) {
      getTasksFx({ date: date, userId: user.id });
    }
  }, []);
  console.log(tasks);
  return (
    <div className="flex flex-col w-1/2 items-end">
      <button
        onClick={() => navigate(-1)}
        className=" flex items-center justify-center w-1/2 transition-colors duration-300 bg-mainColorAccent px-10 py-2 rounded-xl text-20px text-white font-bold hover:bg-textSecondary"
      >
        Back <ArrowRight />
      </button>
      <div
        className={clsx(
          " w-full bg-inputBG flex pt-5 h-[500px] flex-col mt-20 items-center rounded-xl overflow-y-auto",
          styles.root,
        )}
      >
        <h1 className="text-white text-32px font-bold mb-1">Your tasks</h1>
        {tasks.map((item) => (
          <CalendarTaskItem item={item} date={date} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CalendarTasksList;
