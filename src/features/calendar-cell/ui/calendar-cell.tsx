import { CALENDAR_ROUTE } from "@/app/routes/paths";
import { CalendarType } from "@/widgets/calendar/lib/calendar-data";
import clsx from "clsx";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
import CellTaskItem from "@/entities/cell-task-item/ui/cell-task-item.tsx";
import { useEffect } from "react";
import { addNotifications } from "@/features/notifications/lib/notifications-event.ts";
import { useStore } from "effector-react";
import { $notifications } from "@/features/notifications/model/notifications.ts";
import styles from "../styles/calendar-cell.module.scss";
const CalendarCell = ({
  item,
  index,
  tasks,
}: {
  item: CalendarType;
  index: number;
  tasks: Task[];
}) => {
  const today = moment().date();
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const navigate = useNavigate();

  const cellClassName = clsx(
    "border-[1px] w-full p-2 h-[110px] min-w-[136px] border-mainBorder cursor-pointer overflow-y-auto transition-colors duration-200 hover:border-successColor",
    styles.root,
    item.day === moment().format("YYYY-MM-DD") &&
      item.currentMonth === month &&
      item.currentYear === year &&
      "border-mainColorAccent",
    item.dayOfWeek === "Saturday" && "bg-mainBorder bg-opacity-[55%]",
    item.dayOfWeek === "Sunday" && "bg-mainBorder bg-opacity-[55%]"
  );

  const dayClassName = clsx(
    "text-secondaryTextColor text-end",
    today === index + 3 && item.currentMonth === month && "text-mainColorAccent"
  );
  const notification = useStore($notifications);

  const calendarDay = tasks.map((item) => item.calendarDate);
  useEffect(() => {
    if (
      tasks &&
      !notification.find((item) => item.entity === "task") &&
      String(calendarDay[index]) === moment().format("YYYY-MM-DD")
    ) {
      addNotifications({
        text: "close the task",
        title: "open task",
        entity: "task",
        first: true,
      });
    }
  }, [tasks.length]);

  return (
    <div
      onClick={() => navigate(`${CALENDAR_ROUTE}/${item.day}`)}
      className={cellClassName}
    >
      <p className={dayClassName}>{moment(item.day).format("DD")}</p>
      {tasks.map(
        (task) =>
          task.calendarDate === item.day && (
            <CellTaskItem item={task} key={task.id} />
          )
      )}
    </div>
  );
};

export default CalendarCell;
