import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export type User = {
  email: string;
  password: string;
  username: string;
};

export const registerFx = createEffect(async (params: User) => {
  const { data } = await api.post("/auth/registration", {
    ...params,
  });
  localStorage.setItem("token", data.token);
  return data;
});

export const loginFx = createEffect(async (params: User) => {
  const { data } = await api.post("/auth/login", {
    ...params,
  });
  localStorage.setItem("token", data.token);
  return data;
});
