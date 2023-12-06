import { createStore } from "effector";
import { searchPeoplesFx } from "@/widgets/friends-search/lib/search-peoples-fx.ts";
import { Task } from "@/widgets/calendar-tasks-list/model/calendar-tasks.ts";
import { User } from "@/entities/user/model/user.ts";

export type PeopleType = {
  id: number;
  username: string;
  email: string;
  tasks: Task[];
  unacceptedRequests?: User[];
  friends?: User[];
};

export const $peoples = createStore<PeopleType[]>([]).on(
  searchPeoplesFx.doneData,
  (_, data) => data,
);
