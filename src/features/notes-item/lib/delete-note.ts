import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const deleteNoteFx = createEffect(async (id: number) => {
  await api.delete(`/notes/delete?id=${id}`);
});
