import { $plan } from "@/features/plan-item/model/plan";
import { WorkTotalItem } from "@/features/work-total-item/ui";
import { useStore } from "effector-react";

const PlanHourWork = () => {
  const plan = useStore($plan);
  const totalHourWeek = plan.reduce(
    (acc, i) => acc + i.endTime - i.startTime,
    0
  );
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-center text-32px mt-5 font-bold">
        Work table
      </h2>
      <table className=" w-full flex flex-col h-full mt-5 ">
        <thead className="w-full flex flex-col px-5">
          <tr className=" flex w-full ">
            <td className="text-white w-full text-center border py-[13px] border-mainBorder">
              Date of work:
            </td>
            <td className="text-white w-full text-center border py-[13px] border-mainBorder">
              Start hour work:
            </td>
            <td className="text-white w-full text-center border py-[13px] border-mainBorder">
              End hour work:
            </td>
            <td className="text-white w-full text-center border py-[13px] border-mainBorder">
              Total hour work day:
            </td>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col px-5">
          {plan.map((item) => (
            <WorkTotalItem item={item} key={item.id} />
          ))}
          <tr className=" flex w-full ">
            <td className="text-white w-full text-center border py-[13px] border-mainBorder">
              {totalHourWeek}h work on the week
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlanHourWork;
