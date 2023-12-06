import { createStore } from "effector";
import { setBurgerMenu } from "@/widgets/aside-right-content/lib/burger-menu-events.ts";

export const $burgerMenu = createStore<null | []>(null).on(
  setBurgerMenu,
  (_, action) => {
    console.log(action);
    return action;
  },
);
