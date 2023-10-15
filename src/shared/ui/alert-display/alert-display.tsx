import { $alert } from "@/entities/alert/model/alert";
import { useStore } from "effector-react/compat";
import AlertItem from "./alert-item";
import { AnimatePresence } from "framer-motion";

const AlertDisplay = () => {
  const list = useStore($alert);

  return (
    <AnimatePresence>
      <ul className="flex flex-col items-center left-1/2 -translate-x-1/2 top-0 fixed z-20 w-1/2 gap-[10px]">
        {list.map((item) => (
          <AlertItem item={item} key={item.id} />
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default AlertDisplay;
