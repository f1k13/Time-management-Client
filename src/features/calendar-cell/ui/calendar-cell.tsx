import moment from "moment";

const CalendarCell = ({ item }: { item: { day: string } }) => {

  return (
    <div className="border-[1px] p-2 w-full h-full min-h-[110px] min-w-[110px] border-mainBorder">
      <p className="text-mainBorder text-end">
        {moment(item.day).format("DD")}
      </p>
    </div>
  );
};

export default CalendarCell;
