import { createStore } from "effector";
import { setNotificationSidebar } from "@/widgets/sidebar/lib/set-notification-sidebar.ts";

export const $notificationSidebar = createStore<number>(0).on(
  setNotificationSidebar,
  (_, value) => value,
);
