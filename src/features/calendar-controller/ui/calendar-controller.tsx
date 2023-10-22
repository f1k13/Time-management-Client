import { ArrowLeft, ArrowRight } from "@/shared/ui/icons";
import moment from "moment";

const CalendarController = ({
  month,
  nextMonth,
  prevMonth,
}: {
  month: string;
  year: string;
  nextMonth: () => void;
  prevMonth: () => void;
}) => {
  const today = moment().format("DD.MM.YYYY");
  console.log(today);

  return (
    <div className="flex w-full items-center justify-end">
      <p className="text-mainColorAccent w-100 text-20px font-bold"> Today  {today}</p>
      <div className="flex w-1/4 items-center ml-5 gap-1">
        <button onClick={prevMonth}>
          <ArrowLeft />
        </button>
        <p className="text-white uppercase bg-textSecondary px-10 py-2 text -32px rounded-xl">
          {month}
        </p>
        <button onClick={nextMonth}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CalendarController;
