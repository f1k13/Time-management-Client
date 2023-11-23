import { AlertType } from "@/entities/alert/model/alert.ts";
import clsx from "clsx";
import styles from "../styles/alert-display.module.scss";
import { AlertDataIcon } from "../lib/alert-icon-data.tsx";
import { DeleteIcon } from "../../../shared/ui/icons";
import { deleteAlert } from "@/entities/alert/lib/alert-events.ts";
import { motion } from "framer-motion";
const AlertItem = ({ item }: { item: AlertType }) => {
  return (
    <motion.li
      className={clsx(
        styles[item.type],
        "text-white h-[55px] flex items-center justify-between p-2 rounded-xl w-full",
      )}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="flex items-center gap-1">
        <div>{AlertDataIcon[item.type]}</div>
        <p className="ml-2">{item.text}</p>
      </div>
      <button onClick={() => deleteAlert(item.id)}>
        <DeleteIcon />
      </button>
    </motion.li>
  );
};

export default AlertItem;
