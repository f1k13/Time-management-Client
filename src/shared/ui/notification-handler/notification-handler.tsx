import { $authStatus } from "@/entities/auth-status/model/auth-status.ts";
import { useStore } from "effector-react/compat";

const ErrorAlertHandler = () => {
  const { status, text, active } = useStore($authStatus);

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
