import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";

type DeleteTaskParams = {
  id: number;
  userId: number;
};

export const deleteTaskFx = createEffect<DeleteTaskParams, void>(
  async (params: DeleteTaskParams) => {
    const { id, userId } = params;
    await api.delete(`calendar/deleteTask?id=${id}&userId=${userId}`);
  },
);
