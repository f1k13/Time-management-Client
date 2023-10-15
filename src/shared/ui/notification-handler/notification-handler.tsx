import { $notifications } from "@/entities/notifications/model/notifications";
import { useStore } from "effector-react/compat";
import { useEffect } from "react";
import { deleteAlert } from "@/entities/notifications/lib/notifications-events.ts";

const ErrorAlertHandler = () => {
  const list = useStore($notifications);

  return (
    <ul className="flex flex-col items-center left-1/2 -translate-x-1/2 top-0 fixed z-20 w-full gap-[10px]">
      {list.map((item) => (
        <li className="bg-errorColor text-white h-[55px] flex justify-between items-center p-2 rounded-xl w-1/2">
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ErrorAlertHandler;
