import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";

export const deleteTaskFx = createEffect<number, void>(async (id: number) => {
  await api.delete(`calendar/deleteTask?id=${id}`);
});
