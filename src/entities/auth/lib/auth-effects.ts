import { api } from "@/shared/api/api";
import { setToken } from "@/shared/lib";
import { createEffect } from "effector";
import { User } from "@/entities/user/model/user";
import { AxiosError } from "axios";

export const registerFx = createEffect<
  { username: string; email: string; password: string },
  User,
  AxiosError
>(async (params: User) => {
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

export const loginFx = createEffect<
  { email: string; password: string },
  User,
  AxiosError
>(async (params) => {
  const { data } = await api.post("/auth/login", {
    ...params,
  });
  setToken(data.token);
  return data;
});
