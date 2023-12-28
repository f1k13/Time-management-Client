import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const getHouseTotalFx = createEffect(async (userId: number) => {
  const { data } = await api.get(`/work/getHoursOfWorks?userId=${userId}`);
  return data;
});
