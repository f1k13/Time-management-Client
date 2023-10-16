const CalendarCell = ({ item }: { item: { day: string; month: string } }) => {
  const cell = item.day.slice(8, 10);
  console.log(item.month);
  return (
    <div className="border-[1px] p-2 w-[206px] h-[136px] border-mainBorder">
      <p className="text-mainBorder text-end">{cell}</p>
    </div>
  );
};

export default CalendarCell;
