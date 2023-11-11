type CalendarTask = {
  id: number;
  title: string;
  description: string;
  calendarDate: string;
  type: string;
  userId: number;
};

const CalendarTaskItem = ({
  date,
  item,
  index,
}: {
  date?: string;
  item: CalendarTask;
  index: number;
}) => {
  return (
    <div>
      {date === String(item.calendarDate) && (
        <div key={index}>{item.title}</div>
      )}
    </div>
  );
};

export default CalendarTaskItem;
