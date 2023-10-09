import { createStore } from "effector/effector.mjs";
import { loginFx, registerFx } from "../lib/auth-effects.ts";
import { setIsAuth } from "@/entities/auth/lib/auth-events.ts";
import { getSelfFx } from "@/entities/user/lib";

export const $isAuth = createStore<boolean>(false)
  .on(loginFx.doneData, () => true)
  .on(loginFx.failData, () => false)
  .on(registerFx.doneData, () => true)
  .on(registerFx.failData, () => false)
  .on(setIsAuth, (_, value) => value)
  .on(getSelfFx.doneData, () => true)
  .on(getSelfFx.failData, () => false);
