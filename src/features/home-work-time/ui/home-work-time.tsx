import { $user } from "@/entities/user/model/user";
import { getHouseTotalFx } from "@/features/plan-item/lib/get-house-work";
import { $plan } from "@/features/plan-item/model/plan";
import { useStore } from "effector-react";
import { useEffect } from "react";

const HomeWorkTime = () => {
  const plan = useStore($plan);
  const user = useStore($user);
  const totalHourWeek = plan.reduce(
    (acc, i) => acc + i.endTime - i.startTime,
    0
  );
  useEffect(() => {
    getHouseTotalFx(user.id);
  }, []);
  return (
    <div className="w-1/2 h-[200px] p-5 flex  flex-col rounded-2xl shadow-outlineBlock">
      <p className="text-white text-32px font-bold text-center">
        Total work time in week: {totalHourWeek}h
      </p>
      {!plan && (
        <p className="text-white text-32px font-bold text-center">
          You don't have any work
        </p>
      )}
    </div>
  );
};

export default HomeWorkTime;
