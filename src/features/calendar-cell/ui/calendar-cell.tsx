import { CALENDAR_ROUTE } from "@/app/routes/paths";
import { CalendarType } from "@/widgets/calendar/lib/calendar-data";
import clsx from "clsx";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
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
    "border-[1px] w-full p-2 h-[110px] min-w-[136px] border-mainBorder cursor-pointer overflow-y-auto",
    styles.root,
    today === index - 1 &&
      item.currentMonth === month &&
      item.currentYear === year &&
      "border-mainColorAccent",
    item.dayOfWeek === "Saturday" && "bg-mainBorder bg-opacity-50",
    item.dayOfWeek === "Sunday" && "bg-mainBorder bg-opacity-50",
  );

  const dayClassName = clsx(
    "text-textSecondary text-end",
    today === index + 1 &&
      item.currentMonth === month &&
      "text-mainColorAccent",
  );
  return (
    <div
      onClick={() => navigate(`${CALENDAR_ROUTE}/${item.day}`)}
      className={cellClassName}
    >
      <p className={dayClassName}>{moment(item.day).format("DD")}</p>
      {tasks.map(
        (task) =>
          task.calendarDate === item.day && (
            <div className="flex h-[2 0px] gap-3 items-center">
              <div
                className={clsx(
                  "rounded-full w-[10px] h-[10px]",
                  task.type === "important" && "bg-errorColor",
                  task.type === "Average" && "bg-successColor",
                  task.type === "whatever" && "bg-infoColor",
                )}
              ></div>
              <p className={clsx(styles[task.type], "text-12px")}>
                {task.title}
              </p>
            </div>
          ),
      )}
    </div>
  );
};

export default CalendarCell;
