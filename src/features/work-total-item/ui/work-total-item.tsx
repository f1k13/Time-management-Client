import { Plan } from "@/features/plan-item/model/plan";

const WorkTotalItem = ({ item }: { item: Plan }) => {
  console.log(item);
  return (
    <div>
      <p>{item.endTime - item.startTime}</p>
      <p>{item.date}</p>
    </div>
  );
};

export default WorkTotalItem;
