import { AlertType } from "@/entities/alert/model/alert";
import clsx from "clsx";
import styles from "./alert-display.module.scss";
import { AlertDataIcon } from "./lib/alert-icon-data";
import { DeleteIcon } from "../icons";
const AlertItem = ({ item }: { item: AlertType }) => {
  console.log(item.type);
  return (
    <li
      className={clsx(
        styles[item.type],
        "text-white h-[55px] flex items-center justify-between p-2 rounded-xl w-full",
      )}
    >
      <div className="flex items-center gap-1">
        {AlertDataIcon[item.type]}
        <p>{item.text}</p>
      </div>
      <button>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default AlertItem;
