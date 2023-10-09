import { api } from "@/shared/api/api";
import { createEffect } from "effector";
import { setToken } from "@/shared/lib";

export type User = {
  email: string;
  password: string;
  username: string;
};

export const registerFx = createEffect(async (params: User) => {
  try {
    const { data } = await api.post("/auth/registration", {
      ...params,
    });
    setToken(data.token);
    return data;
  } catch (error) {
    return error;
  }
});

export const loginFx = createEffect(async (params: User) => {
  try {
    const { data } = await api.post("/auth/login", {
      ...params,
    });
    setToken(data.token);
    return data;
  } catch (error) {
    return error;
  }
});
