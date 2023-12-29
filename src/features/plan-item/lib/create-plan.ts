import { api } from "@/shared/api/api";
import { createEffect } from "effector";
import { Plan } from "../model/plan";
import { AxiosError } from "axios";
import { addAlert } from "@/entities/alert/lib/alert-events";

type CreatePlanAttrs = {
  startTime: number;
  endTime: number;
  date: string;
  userId: number;
};

export const createPlanFx = createEffect<CreatePlanAttrs, Plan, AxiosError>(
  async (params: CreatePlanAttrs) => {
    const { data } = await api.post<Plan>("/work/create", {
      ...params,
    });
    return data;
  }
);

createPlanFx.failData.watch(() => {
  addAlert({
    type: "error",
    text: "Failed to create plan",
  });
});

createPlanFx.doneData.watch(() => {
  addAlert({
    type: "success",
    text: "Plan created successfully",
  });
});
