import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export type User = {
  email: string;
  password: string;
  username: string;
};

export const registerUserFx = createEffect(
  async ({ email, password, username }: User) => {
    const { data } = await api.post("/auth/registration", {
      email,
      password,
      username,
    });
    return data;
  }
);

export const loginUserFx = createEffect(
  async ({ email, password, username }: User) => {
    const { data } = await api.post("/auth/login", {
      email,
      password,
      username,
    });
    return data;
  }
);
