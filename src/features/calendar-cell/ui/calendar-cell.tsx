import { CALENDAR_ROUTE } from "@/app/routes/paths";
import { CalendarType } from "@/widgets/calendar/lib/calendar-data";
import clsx from "clsx";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CalendarCell = ({
  item,
  index,
}: {
  item: CalendarType;
  index: number;
}) => {
  const today = moment().date();
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${CALENDAR_ROUTE}/${item.day}`)}
      className={clsx(
        "border-[1px] w-full p-2 min-h-[110px] min-w-[136px] border-mainBorder cursor-pointer",
        today === index - 1 &&
          item.currentMonth === month &&
          item.currentYear === year &&
          "border-mainColorAccent",
        item.dayOfWeek === "Saturday" && "bg-mainBorder bg-opacity-50",
        item.dayOfWeek === "Sunday" && "bg-mainBorder bg-opacity-50"
      )}
    >
      <p
        className={clsx(
          "text-textSecondary text-end",
          today === index + 1 &&
            item.currentMonth === month &&
            "text-mainColorAccent"
        )}
      >
        {moment(item.day).format("DD")}
      </p>
    </div>
  );
};

export default CalendarCell;
