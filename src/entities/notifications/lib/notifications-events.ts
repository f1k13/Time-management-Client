import { createEvent } from "effector";
import { Notification } from "../model/notifications";

export const setNotificationsEvent = createEvent<Notification>();
