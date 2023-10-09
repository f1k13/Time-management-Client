import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";
import { User } from "@/entities/user/model/user.ts";
export const getSelfFx = createEffect<void, User, Error>(async () => {
  try {
    const { data } = await api.get("/users/self");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error();
  }
});
