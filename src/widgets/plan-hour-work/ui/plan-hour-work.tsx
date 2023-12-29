import { $plan } from "@/features/plan-item/model/plan";
import WorkTotalItem from "@/features/work-total-item/ui/work-total-item";
import { useStore } from "effector-react";

const PlanHourWork = () => {
  const plan = useStore($plan);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-center text-32px mt-5 font-bold">
        Work table
      </h2>
      <table className=" w-full flex justify-between h-full mt-5 ">
        <tbody className="w-full flex flex-col px-5">
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
              Total hour work:
            </td>
          </tr>
          {plan.map((item) => (
            <WorkTotalItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanHourWork;
