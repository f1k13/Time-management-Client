import { $user } from "@/entities/user/model/user";
import { $plan } from "@/features/plan-item/model/plan";
import { PlanItem } from "@/features/plan-item/ui";
import WorkTotalItem from "@/features/work-total-item/ui/work-total-item";
import { generateDays } from "@/widgets/notes/lib/generate-days";
import { useStore } from "effector-react";
import moment from "moment";

const Plan = () => {
  const today = moment();
  const user = useStore($user);
  const plan = useStore($plan);
  return (
    <div className="w-full h-full p-[5px]">
      <div className="flex items-center gap-20">
        <h2 className="text-white text-32px ml-2 font-medium">Plan</h2>
        <p className="py-2 px-10 rounded-2xl text-white bg-mainColorAccent">
          You can specify how many hours a day you worked
        </p>
      </div>
      <div className="mt-10 flex justify-between w-full px-2 gap-5">
        {generateDays(today).map((item) => (
          <PlanItem user={user} key={item} item={item} />
        ))}
      </div>
      <div>
        {plan.map((item) => (
          <WorkTotalItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Plan;
