import { AlertType } from "@/entities/alert/model/alert";

const AlertItem = ({ item }: { item: AlertType }) => {
  return (
    <li className="bg-errorColor text-white h-[55px] flex justify-between items-center p-2 rounded-xl w-1/2">
      <p>{item.text}</p>
    </li>
  );
};

export default AlertItem;
