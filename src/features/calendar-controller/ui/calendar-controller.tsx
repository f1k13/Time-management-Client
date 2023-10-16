

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
    <div>
      <p>{month}</p>
      <button onClick={nextMonth}>Next</button>
      <button onClick={prevMonth}>Prev</button>
    </div>
  );
};

export default CalendarController;
