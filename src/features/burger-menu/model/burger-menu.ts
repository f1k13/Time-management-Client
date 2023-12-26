import { createStore } from "effector";
import { setBurgerMenu } from "@/widgets/burger-menu/lib/burger-menu-events.ts";

export const $burgerMenu = createStore<null | []>(null).on(
  setBurgerMenu,
  (_, action) => {
    console.log(action);
    return action;
  },
);
