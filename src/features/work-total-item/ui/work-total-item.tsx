import { Plan } from "@/features/plan-item/model/plan";

const WorkTotalItem = ({ item }: { item: Plan }) => {
  return (
    <tr className="flex w-full">
      <td className="text-white w-full text-center border py-[13px] border-mainBorder">
        {item.date}
      </td>
      <td className="text-white w-full text-center border py-[13px] border-mainBorder">
        {item.startTime}.00
      </td>
      <td className="text-white w-full text-center border py-[13px] border-mainBorder">
        {item.endTime}.00
      </td>
      <td className="text-white w-full text-center border py-[13px] border-mainBorder">
        {item.endTime - item.startTime}h
      </td>
    </tr>
  );
};

export default WorkTotalItem;
