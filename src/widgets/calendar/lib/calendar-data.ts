import moment from "moment";

export const calendarData = (currentMonth?: moment.Moment) => {
  const data = [];
  const start = moment(currentMonth).startOf("month").startOf("week");
  const end = moment(currentMonth).endOf("month").endOf("week");
  const startDay = start.add(1, "days");
  const endDay = end.add(1, "days");
  for (let i = startDay; i <= endDay; i.add(1, "days")) {
    data.push({
      day: i.format("YYYY-MM-DD"),
      currentMonth: i.format("MMMM"),
      dayOfWeek: startDay.format("dddd"),
    });
  }

  return data;
};
