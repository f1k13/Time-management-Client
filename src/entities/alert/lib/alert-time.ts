import { AlertType } from "../model/alert";
import { deleteAlert } from "./alert-events";

export const alertTime = (data: AlertType[]) => {
  const alert = data.at(-1);
  if (alert) {
    setTimeout(() => {
      deleteAlert(alert.id);
    }, 5000);
  }
};
