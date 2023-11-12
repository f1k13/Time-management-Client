import { TasksForm } from "@/features/tasks-form/ui";

const CalendarTasks = ({ item }: { item?: string }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-white text-32px font-bold ">{item}</h2>
      <div className="mt-10 w-[50%]">
        <h2 className="text-white text-20px font-normal">Create task</h2>
        <TasksForm item={item} />
      </div>
    </div>
  );
};

export default CalendarTasks;
