import { addAlert } from "@/entities/alert/lib/alert-events";

const CalendarPage = () => {
  return (
    <div onClick={() => addAlert({ type: "success", text: "test" })}>
      КАЛЕНДАРЬ
    </div>
  );
};

export default CalendarPage;
