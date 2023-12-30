import { Dashboard } from "@/features/dashboard-week-item/ui";
import { $plan } from "@/features/plan-item/model/plan";
import { useStore } from "effector-react";

const ProgressDashboard = () => {
  const plan = useStore($plan);
  return (
    <div className="w-full p-[5px] h-full flex flex-col">
      <h2 className="text-white text-32px ml-2 font-medium">Progress</h2>
      <div className="w-full flex justify-between mt-10 h-[500px]  items-center ">
        <Dashboard />
      </div>
      <div className="w-full flex flex-col items-center gap-2 bg-inputBG rounded-2xl py-2 mt-10 h-[140px]">
        <div className="flex items-center gap-2">
          <p className="text-white text-20px text-center font-bold">
            You working week time
          </p>
          <p className="text-mainColorAccent text-16px text-center font-bold">
            {plan.reduce((acc, i) => acc + i.endTime - i.startTime, 0)}h
          </p>
        </div>
        <div className="flex w-full justify-between px-5 mt-5 gap-2">
          {plan.map((item) => (
            <div
              className="flex flex-col w-[150px] items-center rounded-2xl"
              key={item.id}
            >
              <p className="text-successColor text-16px">{item.date}</p>
              <p className="text-white text-14px">
                {item.endTime - item.startTime}h
              </p>
            </div>
          ))}
          {!plan && <p className="text-white text-14px">No data</p>}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
