import { Notification } from "../model/notification";
import { createEvent } from "effector/compat";

export const setNotificationEvent = createEvent<Notification>();
