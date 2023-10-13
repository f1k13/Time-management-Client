import { createStore } from "effector";
import { setNotificationsEvent } from "../lib/notifications-events";

export type Notification = {
  status: "success" | "error" | "warning" | "info";
  text: string;
  active: true;
};

export const $notifications = createStore<Notification[]>([
  {
    status: "success",
    text: "",
    active: true,
  },
]).on(setNotificationsEvent, (state, notification) => {
  return [...state, notification];
});
