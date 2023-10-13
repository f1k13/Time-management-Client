import { $notifications } from "@/entities/notifications/model/notifications";
import { useStore } from "effector-react/compat";

const ErrorAlertHandler = () => {
  const { active, text, status } = useStore($notifications);
  return (
    <div>
      {text && (
        <div className="relative flex justify-center">
          <div className="bg-errorBG absolute w-2/4 h-[55px] flex justify-between items-center p-2 rounded-xl">
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorAlertHandler;
