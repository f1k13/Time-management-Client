import { addAlert } from "@/entities/alert/lib/alert-events";

const CalendarPage = () => {
  return (
    <div onClick={() => addAlert({ type: "info", text: "test" })}>
      КАЛЕНДАРЬ
    </div>
  );
};

export default CalendarPage;
