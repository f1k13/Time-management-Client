import { PLAN_ROUTE } from "@/app/routes/paths";
import { $plan } from "@/features/plan-item/model/plan";
import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import {
  DashboardType,
  TabsList,
  dataDashboard,
} from "@/widgets/progress-dashboard/lib/data-dasboard";
import { Tabs } from "@/shared/ui/tabs";
import { useState } from "react";
const ProgressDashboard = () => {
  const plan = useStore($plan);
  const navigate = useNavigate();
  const [active, setActive] = useState<DashboardType>("simpleLineChart");

  return (
    <div className="w-full p-[5px] h-full flex flex-col">
      <h2 className="text-white text-32px ml-2 font-medium">Progress</h2>
      <Tabs active={active} setActive={setActive} tabs={TabsList} />
      <div className="w-full flex justify-between mt-10 h-[500px]  items-center ">
        {plan.length === 0 ? (
          <p>
            You no have any work time,
            <span onClick={() => navigate(PLAN_ROUTE)}>you can add work</span>
          </p>
        ) : (
          dataDashboard[active]
        )}
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
          {plan.length === 0 && (
            <p className="text-white text-center text-20px">No data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
