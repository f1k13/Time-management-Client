const CalendarController = ({
  month,
  nextMonth,
  prevMonth,
}: {
  month: string;
  nextMonth: () => void;
  prevMonth: () => void;
}) => {
  return (
    <div className="mt-5 flex w-full items-center">
      <p className="text-mainColorAccent w-40 text-20px font-bold">{month}</p>
      <div className="flex ml-5 gap-10">
        <button
          className="bg-secondaryActiveColor rounded-xl py-2 px-5 text-white hover:bg-mainColorAccent transition-all duration-300"
          onClick={nextMonth}
        >
          Next month
        </button>
        <button
          className="bg-secondaryActiveColor rounded-xl py-2 px-5 text-white hover:bg-mainColorAccent transition-all duration-300"
          onClick={prevMonth}
        >
          Previus month
        </button>
      </div>
    </div>
  );
};

export default CalendarController;
