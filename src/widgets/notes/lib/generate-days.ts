import moment from "moment";

export const generateDays = (currentWeek: moment.Moment) => {
  const days: string[] = [];
  const startDay = moment(currentWeek).startOf("week").add(1, "days");
  const endDay = moment(currentWeek).endOf("week").add(1, "days");
  for (let i = startDay; i <= endDay; i.add(1, "day")) {
    days.push(i.format("MM.DD dddd"));
  }
  return days;
};
