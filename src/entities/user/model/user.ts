import { getSelfFx } from "@/entities/user/lib";
import { createStore } from "effector/effector.mjs";
import { getAllUsers } from "@/entities/user/lib/user-effects.ts";

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  tasks?: [];
  unacceptedRequests?: number[];
  friends?: number[];
};

export const $user = createStore<User>({} as User)
  .on(getSelfFx.doneData, (_, user) => user)

  .on(getSelfFx.failData, (_, error) => {
    console.log(error);
  });

export const $users = createStore<User[]>([]).on(
  getAllUsers.doneData,
  (_, users) => users,
);
