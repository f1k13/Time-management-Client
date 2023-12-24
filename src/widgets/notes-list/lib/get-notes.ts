import { Notes } from "@/features/notes-week-item/model/notes";
import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const getNotesFx = createEffect(async (id: number) => {
  const { data } = await api.get<Notes[]>(`/notes/getNotes?userId=${id}`);
  return data;
});
