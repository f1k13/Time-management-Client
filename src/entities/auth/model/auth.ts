import { createStore } from "effector/effector.mjs";
import { loginFx, registerFx } from "../lib/auth-effects.ts";
import { setIsAuth } from "@/entities/auth/lib/auth-events.ts";
import { getSelfFx } from "@/entities/user/lib";
import { addAlert } from "@/entities/alert/lib/alert-events.ts";

export const $isAuth = createStore<boolean>(false)
  .on(loginFx.doneData, () => {
    setIsAuth(true);
    addAlert({
      type: "success",
      text: "Successfully logged in",
    });
    return true;
  })
  .on(loginFx.failData, () => {
    setIsAuth(false);
    addAlert({
      type: "error",
      text: "Incorrect username or password",
    });
    return false;
  })
  .on(registerFx.doneData, () => {
    setIsAuth(true);
    addAlert({
      type: "success",
      text: "Successfully registered",
    });
    return true;
  })
  .on(registerFx.failData, () => {
    setIsAuth(false);
    addAlert({
      type: "error",
      text: "Account with this email or username already exists",
    });
    return false;
  })
  .on(setIsAuth, (_, value) => value)
  .on(getSelfFx.doneData, () => true)
  .on(getSelfFx.failData, () => false);
