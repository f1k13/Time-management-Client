import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";
import { User } from "@/entities/user/model/user.ts";
import { AxiosError } from "axios";
import { addAlert } from "@/entities/alert/lib/alert-events.ts";

type paramsFriendType = {
  userId: number;
  friendId: number;
};

export const addFriendFx = createEffect(async (params: paramsFriendType) => {
  const { data } = await api.post("/users/acceptFriend", {
    ...params,
  });
  console.log(data);
  return data;
});

export const sendRequestToFriendFx = createEffect<
  paramsFriendType,
  User,
  AxiosError
>(async (params: paramsFriendType) => {
  const { data } = await api.post("/users/sendRequestToFriend", {
    ...params,
  });
  return data;
});

sendRequestToFriendFx.doneData.watch((data) => {
  addAlert({
    text: `Request send to ${data.username}`,
    type: "success",
  });
});

sendRequestToFriendFx.failData.watch(() => {
  addAlert({
    text: "Error sending request",
    type: "error",
  });
});
