import moment from "moment/moment";
import { useEffect } from "react";
import { getTasksFx } from "@/widgets/calendar-tasks-list/lib/get-tasks-effect.ts";
import { useStore } from "effector-react";
import { $calendarTasks } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
import { $user } from "@/entities/user/model/user.ts";
import { useNavigate } from "react-router-dom";
import { CALENDAR_ROUTE } from "@/app/routes/paths.ts";

const HomeTask = () => {
  const navigate = useNavigate();
  const tasks = useStore($calendarTasks);
  const user = useStore($user);
  const today = moment().format("YYYY-MM-DD");

  useEffect(() => {
    getTasksFx({ date: today, userId: user.id });
  }, []);
  return (
    <div className="border w-1/2 h-[200px] p-5 flex  flex-col rounded-2xl border-mainBorder">
      <h2 className="text-white text-32px font-bold text-center">
        Tasks for today
      </h2>
      <p className="text-mainColorAccent text-20px mt-2">
        As of today, you have {tasks.length} open tasks
      </p>
      <button
        onClick={() => navigate(`${CALENDAR_ROUTE}/${today}`)}
        className="bg-mainColorAccent py-2 w-1/2 mt-5 rounded-xl text-20px transition-colors duration-300 text-white font-bold hover:bg-textSecondary"
      >
        View your tasks
      </button>
    </div>
  );
};

export default HomeTask;
