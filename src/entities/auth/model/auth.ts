import { createStore } from "effector/effector.mjs";
import { loginFx, registerFx } from "../lib/auth-effects.ts";
import { setIsAuth } from "@/entities/auth/lib/auth-events.ts";
import { getSelfFx } from "@/entities/user/lib";
import { setNotificationsEvent } from "@/entities/notifications/lib/notifications-events.ts";

export const $isAuth = createStore<boolean>(false)
  .on(loginFx.doneData, () => true)
  .on(loginFx.failData, () => {
    setNotificationsEvent({
      status: "error",
      text: "Incorrect email or password",
      active: true,
    });
    console.log('asd')
    return false;
  })
  .on(registerFx.doneData, () => true)
  .on(registerFx.failData, () => false)
  .on(setIsAuth, (_, value) => value)
  .on(getSelfFx.doneData, () => true)
  .on(getSelfFx.failData, () => false);
