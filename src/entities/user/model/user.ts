import { getSelfFx } from "@/entities/user/lib";
import { createStore } from "effector/effector.mjs";

export type User = {
  id: number;
  username: string;
  email?: string;
  password: string;
  tasks?: [];
};

export const $user = createStore<User>({} as User)
  .on(getSelfFx.doneData, (_, user) => user)

  .on(getSelfFx.failData, (_, error) => {
    console.log(error);
  });
