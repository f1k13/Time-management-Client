import clsx from "clsx";
import moment from "moment";

const CalendarCell = ({
  item,
  index,
}: {
  item: { day: string; currentMonth: string };
  index: number;
}) => {
  const today = moment().date();
  const month = moment().format("MMMM");
  return (
    <div
      className={clsx(
        "border-[1px] p-2 w-full h-full min-h-[136px] min-w-[136px] border-mainBorder",
        today === index + 1 &&
          item.currentMonth === month &&
          "border-mainColorAccent"
      )}
    >
      <p
        className={clsx(
          "text-mainBorder text-end",
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
