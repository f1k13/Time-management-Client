import { createStore } from "effector";
import { createNoteFx } from "../lib/create-note-fx";
import { getNotesFx } from "@/widgets/notes-list/lib/get-notes";

export type Notes = {
  id: number;
  title: string;
  date: string;
  userId: number;
};

export const $notes = createStore<Notes[]>([])
  .on(createNoteFx.doneData, (state, data: Notes) => {
    return [...state, data];
  })
  .on(getNotesFx.doneData, (_, data: Notes[]) => {
    return data;
  })
  .on(createNoteFx.failData, () => {
    return [];
  })
  .on(getNotesFx.failData, () => {
    return [];
  });
