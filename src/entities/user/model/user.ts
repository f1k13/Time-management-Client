import { createStore } from "effector/effector.mjs";
import { User, registerUserFx } from "../lib/userEffects";

export const $user = createStore<User | null>(null)
  .on(registerUserFx.doneData, (_, user) => user)
  .on(registerUserFx.failData, (_, error) => {
    console.error(error);
    return null;
  });
