import { createStore } from "effector";
import { createPlanFx } from "../lib/create-plan";
import { Plan } from "@/widgets/plan/ui";
import { getHouseTotalFx } from "../lib/get-house-work";

export type Plan = {
  userId: number;
  id: number;
  date: string;
  startTime: number;
  endTime: number;
};

export const $plan = createStore<Plan[]>([])
  .on(createPlanFx.doneData, (state, data: Plan) => {
    return [...state, data];
  })
  .on(createPlanFx.failData, () => {
    return [];
  })
  .on(getHouseTotalFx.doneData, (_, data: Plan[]) => {
    return data;
  })
  .on(getHouseTotalFx.failData, () => {
    return [];
  });
