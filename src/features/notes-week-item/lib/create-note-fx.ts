import { api } from "@/shared/api/api";
import { createEffect } from "effector";
import { Notes } from "../model/notes";
import { AxiosError } from "axios";

type CreateNoteAttrs = {
  title: string;
  date: string;
  userId: number;
};

export const createNoteFx = createEffect<CreateNoteAttrs, Notes, AxiosError>(
  async (params: CreateNoteAttrs) => {
    const { data } = await api.post<Notes>("/notes/create", {
      ...params,
    });
    return data;
  }
);
