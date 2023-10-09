import { createStore } from "effector/effector.mjs";
import { User, loginFx, registerFx } from "../lib/authEffects";

export const isAuth = createStore<boolean>(false);

export const $user = createStore<User | null>(null)
  .on(registerFx.doneData, (_, user) => user)
  .on(registerFx.failData, (_, error) => {
    console.error(error);
    return null;
  })
  .on(loginFx.doneData, (_, user) => user)
  .on(loginFx.failData, (_, error) => {
    console.error(error);
    return null;
  });
