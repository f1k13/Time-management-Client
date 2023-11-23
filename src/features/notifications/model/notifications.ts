import { createStore } from "effector";
import {
  addNotifications,
  deleteCurrentNotification,
} from "@/features/notifications/lib/notifications-event.ts";

export type NotificationType = {
  id: number;
  title: string;
  text: string;
  entity: "task" | "friend";
  first: boolean;
};

export const $notifications = createStore<NotificationType[]>([])
  .on(addNotifications, (state, notification) => {
    return [...state, { ...notification, id: Math.random() }];
  })
  .on(deleteCurrentNotification, (state, id) => {
    return state.filter((item) => item.id !== id);
  });
