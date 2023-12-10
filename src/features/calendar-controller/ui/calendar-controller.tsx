import { ArrowLeft, ArrowRight } from "@/shared/ui/icons";
import moment from "moment";
import { useStore } from "effector-react";
import { $user } from "@/entities/user/model/user.ts";

const CalendarController = ({
  month,
  nextMonth,
  prevMonth,
  year,
}: {
  month: string;
  year: string;
  nextMonth: () => void;
  prevMonth: () => void;
}) => {
  const today = moment().format("DD.MM.YYYY");
  const user = useStore($user);
  console.log(user);
  return (
    <div className="flex w-full items-center justify-end">
      <p className="text-mainColorAccent text-20px font-bold"> Today {today}</p>
      <div className="flex w-[250px] items-center ml-5 gap-1">
        <button onClick={prevMonth}>
          <ArrowLeft />
        </button>
        <p className="text-white uppercase w-full bg-textSecondary text-center py-2 text -32px rounded-xl">
          {month}
        </p>
        <button onClick={nextMonth}>
          <ArrowRight />
        </button>
      </div>
      <p className="text-white ml-10 uppercase bg-textSecondary px-10 mr-5 py-2 text -32px rounded-xl">
        {year}
      </p>
    </div>
  );
};

export default CalendarController;
