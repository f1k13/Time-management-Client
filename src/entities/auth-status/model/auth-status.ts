import { createStore } from "effector";
import { setAuthStatus } from "@/entities/auth-status/lib/auth-status-events.ts";

export type AuthStatus = "success" | "error" | "warning" | "info";

export const $authStatus = createStore<AuthStatus>("success").on(
  setAuthStatus,
  (_, status) => status,
);
