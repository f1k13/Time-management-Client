import { createStore } from "effector";
import { addAlert, deleteAlert } from "../lib/alert-events";
import { alertTime } from "../lib/alert-time";

export type AlertType = {
  id: string;
  type: "success" | "error" | "warning" | "info";
  text: string;
};

export const $alert = createStore<AlertType[]>([])
  .on(addAlert, (state, notification) => {
    return [...state, { ...notification, id: Date.now().toString() }];
  })
  .on(deleteAlert, (state, id) => state.filter((item) => item.id !== id));

$alert.watch(alertTime);
