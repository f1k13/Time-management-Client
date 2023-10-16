import moment from "moment";

const CalendarCell = ({ item }: { item: { day: string; month: string } }) => {
  console.log(item.month);
  console.log(item.day);
  return (
    <div className="border-[1px] p-2 w-full h-full min-h-[136px] min-w-[146px] border-mainBorder">
      <p className="text-mainBorder text-end">
        {moment(item.day).format("DD")}
      </p>
    </div>
  );
};

export default CalendarCell;
