import { createEvent } from "effector";
import { AlertType } from "../model/notifications";

export const setNotificationsEvent = createEvent<Omit<AlertType, "id">>();
export const deleteAlert = createEvent<string>()