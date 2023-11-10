import { TasksForm } from "@/features/tasks-form/ui";
import { ArrowRight } from "@/shared/ui/icons";
import { useNavigate } from "react-router-dom";


const CalendarFormTasks = ({ item }: { item?: string }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col p-5">
      <div className=" flex justify-between">
        <h2 className="text-white text-32px font-bold ">{item}</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center transition-colors duration-300 bg-mainColorAccent px-10 rounded-xl text-20px text-white font-bold hover:bg-textSecondary"
        >
          Back <ArrowRight />
        </button>
      </div>
      <div className="mt-10 w-[30%] h-full">
        <h2 className="text-white text-20px font-normal">Create task</h2>
        <TasksForm />
      </div>
    </div>
  );
};

export default CalendarFormTasks;
