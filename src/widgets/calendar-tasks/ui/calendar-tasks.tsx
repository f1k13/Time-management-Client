import TasksForm from "@/features/tasks-form/ui/tasks-form";
import { ArrowRight } from "@/shared/ui/icons";

const CalendarFormTasks = ({ item }: { item?: string }) => {
  return (
    <div className="w-full flex flex-col p-5">
      <div className=" flex justify-between">
        <h2 className="text-white text-32px font-bold ">{item}</h2>
        <button className="flex items-center bg-mainColorAccent px-10 rounded-xl text-20px text-white font-bold">
          Back <ArrowRight />
        </button>
      </div>
      <div className="mt-10 w-[30%]">
        <h2 className="text-white text-20px font-normal">Create task</h2>
        <TasksForm />
      </div>
    </div>
  );
};

export default CalendarFormTasks;
