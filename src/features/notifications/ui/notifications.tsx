import { NotificationIcon } from "@/shared/ui/icons";
import { useStore } from "effector-react";
import { $notifications } from "@/features/notifications/model/notifications.ts";
import { useState } from "react";
import { NotificationItem } from "@/entities/notification-item/ui";

const Notifications = () => {
  const notifications = useStore($notifications);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div
      className="cursor-pointer relative"
      onClick={() => setIsVisible(!isVisible)}
    >
      {notifications.length !== 0 && (
        <p className="bg-errorColor w-[20px] text-center text-12px text-white h-[20px] rounded-full absolute top-3 right-3">
          {notifications.length}
        </p>
      )}
      <NotificationIcon />
      {isVisible && (
        <ul
          onClick={(e) => e.stopPropagation()}
          className="absolute left-[-150px] mt-2 rounded-2xl bg-activeColor min-h-[200px] w-[200px] px-5 py-2"
        >
          {notifications.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
