import { createStore } from "effector/effector.mjs";
import { loginFx, registerFx } from "@/entities/auth/lib";
import { getSelfFx } from "@/entities/user/lib";


export type User = {
  id: string;
  username: string;
  email: string;
};

export const $user = createStore<User | null>(null)
  .on(registerFx.doneData, (_, user) => user)
  .on(registerFx.failData, (_, error) => {
    console.log(error);
    return null;
  })
  .on(loginFx.doneData, (_, user) => user)
  .on(loginFx.failData, (_, error) => {
    console.error(error);
    return null;
  })
  .on(getSelfFx.doneData, (_, user) => user)
  .on(getSelfFx.failData, (_, error) => {
    console.log(error);
  });
