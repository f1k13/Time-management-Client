import { createEffect } from "effector";
import { api } from "@/shared/api/api.ts";
import { PeopleType } from "@/widgets/friends-search/model/peoples.ts";

export const searchPeoplesFx = createEffect(async (value: string) => {
  const { data } = await api.get<PeopleType[]>(
    `/users/search?username=${value}`,
  );
  console.log(data);
  return data;
});
