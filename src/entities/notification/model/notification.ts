import { createStore } from "effector";
import { setNotificationEvent } from "../lib/notification-events";

export type Notification = {
  status: "success" | "error" | "warning" | "info";
  text: string;
};

export const $notification = createStore<Notification[]>([]).on(setNotificationEvent, (_, payload) => payload);
