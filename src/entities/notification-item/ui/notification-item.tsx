import { NotificationType } from "@/features/notifications/model/notifications.ts";
import { motion } from "framer-motion";
import { RemoveIcon } from "@/shared/ui/icons";
import { deleteCurrentNotification } from "@/features/notifications/lib/notifications-event.ts";

const NotificationItem = ({ item }: { item: NotificationType }) => {
  return (
    <motion.li
      className="flex items-center w-full justify-between"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div>
        <h2 className="text-20px text-white">{item.title}</h2>
        <p className="text-errorColor ">{item.text}</p>
      </div>
      <div onClick={() => deleteCurrentNotification(item.id)}>
        <RemoveIcon />
      </div>
    </motion.li>
  );
};

export default NotificationItem;
