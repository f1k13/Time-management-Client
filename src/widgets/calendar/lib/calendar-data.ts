import moment from "moment";

export const calendarData = () => {
  const data = [];
  const startDay = moment().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");
  for (let i = startDay; i <= endDay; i.add(1, "days")) {
    data.push({
      day: i.format("YYYY-MM-DD"),
      month: i.format("MMMM"),
    });
  }
  return data;
};
