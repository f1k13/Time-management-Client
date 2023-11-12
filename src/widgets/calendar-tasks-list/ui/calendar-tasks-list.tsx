import { $user } from "@/entities/user/model/user";
import { useStore } from "effector-react/effector-react.umd";
import CalendarTaskItem from "./calendar-task-item";
import { ArrowRight } from "@/shared/ui/icons";
import { useNavigate } from "react-router-dom";
import { $tasksCalendar } from "../model/get-tasks";
import { getTasksFx } from "../lib/get-tasks-effect";
import { useEffect } from "react";


const CalendarTasksList = ({ date }: { date?: string }) => {
  const user = useStore($user);
  const tasks = useStore($tasksCalendar);

  const navigate = useNavigate();

  useEffect(() => {
    if (date && user) {
      getTasksFx({ date: date, userId: user?.id });
    }
  }, []);

  return (
    <div className="flex flex-col w-1/2 items-end">
      <button
        onClick={() => navigate(-1)}
        className=" flex items-center justify-center w-1/2 transition-colors duration-300 bg-mainColorAccent px-10 py-2 rounded-xl text-20px text-white font-bold hover:bg-textSecondary"
      >
        Back <ArrowRight />
      </button>
      <div className=" w-full bg-inputBG flex pt-5 h-[500px] flex-col mt-20 items-center rounded-xl">
        <h1 className="text-white text-32px font-bold mb-1">Your tasks</h1>
        {tasks.map((item, index) => (
          <CalendarTaskItem item={item} date={date} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CalendarTasksList;
