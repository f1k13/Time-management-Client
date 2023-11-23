import { createEvent } from "effector";
import { NotificationType } from "@/features/notifications/model/notifications.ts";

export const addNotifications = createEvent<Omit<NotificationType, "id">>();

export const deleteCurrentNotification = createEvent<number>();

export const deleteAllNotifications = createEvent();
