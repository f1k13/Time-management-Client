import { createStore } from "effector";
import { setNotificationEvent } from "../lib/notification-events";


export type Notification = {
  status: "success" | "error" | "warning" | "info";
  text: string;
  active: boolean;
};

export const $notification = createStore<Notification>({
  status: "info",
  text: "",
  active: false,
}).on(setNotificationEvent, (_, payload) => payload);
