import { api } from "@/shared/api/api";
import { setToken } from "@/shared/lib";
import { createEffect } from "effector";

import { User } from "@/entities/user/model/user";
import { AxiosError } from "axios";
import { setIsAuth } from ".";
import { setNotificationEvent } from "@/entities/notification/lib/notification-events";

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
    setIsAuth(true);
    return data;
  } catch (error) {
    setNotificationEvent({
      error: "error",
      text: error.data.response.message,
    });
    setIsAuth(false);
    return error;
  }
});

export const loginFx = createEffect<
  { email: string; password: string },
  User,
  AxiosError
>(async (params) => {
  try {
    const { data } = await api.post("/auth/login", {
      ...params,
    });
    setToken(data.token);
    setIsAuth(true);
    return data;
  } catch (error) {
    setIsAuth(false);
    setNotificationEvent({
      error: "error",
      text: error.data.response.message,
    });
    return error;
  }
});
