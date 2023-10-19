import moment from "moment";
export type CalendarType = {
  day: string;
  currentMonth: string;
  dayOfWeek: string;
  currentYear: string;
};
export const calendarData = (currentMonth?: moment.Moment) => {
  const data: CalendarType[] = [];
  const start = moment(currentMonth).startOf("month").startOf("week"); // Добавить add(1, "days")
  const end = moment(currentMonth).endOf("month").endOf("week");
  const startDay = start.add(1, "days");
  const endDay = end.add(1, "days");
  for (let i = startDay; i <= endDay; i.add(1, "days")) {
    data.push({
      day: i.format("YYYY-MM-DD"),
      currentMonth: i.format("MMMM"),
      currentYear: i.format("YYYY"),
      dayOfWeek: startDay.format("dddd"),
    });
  }

  return data;
};
