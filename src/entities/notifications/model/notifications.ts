import { createStore } from "effector";
import {
  deleteAlert,
  setNotificationsEvent,
} from "../lib/notifications-events";

export type AlertType = {
  id: string;
  type: "success" | "error" | "warning" | "info";
  text: string;
};

export const $notifications = createStore<AlertType[]>([])
  .on(setNotificationsEvent, (state, notification) => {
    return [...state, { ...notification, id: Date.now().toString() }];
  })
  .on(deleteAlert, (state, id) => state.filter((item) => item.id !== id));

const test = (data: AlertType[]) => {
  const alert = data.at(-1);
  if (alert) {
    setTimeout(() => {
      deleteAlert(alert.id);
    }, 5000);
  }
};

$notifications.watch(test);
