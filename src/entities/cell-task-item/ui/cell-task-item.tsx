import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
import styles from "@/features/calendar-cell/styles/calendar-cell.module.scss";
import clsx from "clsx";

const CellTaskItem = ({ item }: { item: Task }) => {
  return (
    <div className="flex h-[20px] gap-3 items-center">
      <div
        className={clsx(
          "rounded-full w-[10px] h-[10px]",
          item.type === "important" && "bg-errorColor",
          item.type === "Average" && "bg-successColor",
          item.type === "whatever" && "bg-infoColor",
        )}
      ></div>
      <p className={clsx(styles[item.type], "text-12px")}>{item.title}</p>
    </div>
  );
};

export default CellTaskItem;
