import moment from "moment";

export const calendarData = (currentMonth?: moment.Moment) => {
  const data = [];
  const startDay = moment(currentMonth).startOf("month").startOf("week");
  const endDay = moment(currentMonth).endOf("month").endOf("week");
  
  for (let i = startDay; i <= endDay; i.add(1, "days")) {
    data.push({
      day: i.format("YYYY-MM-DD"),
      currentMonth: i.format("MMMM"),

    });
  }
  return data;
};
