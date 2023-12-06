import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";
import { User } from "../model/user";

export const getSelfFx = createEffect<void, User, Error>(async () => {
  try {
    const { data } = await api.get("/users/self");
    return data;
  } catch (error) {
    throw new Error();
  }
});

export const getAllUsers = createEffect<void, User[], Error>(async () => {
  try {
    const { data } = await api.get("/users/getAll");
    return data;
  } catch (error) {
    throw new Error();
  }
});
