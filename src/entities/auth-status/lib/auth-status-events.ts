import { createEvent } from "effector";
import { AuthStatus } from "@/entities/auth-status/model/auth-status.ts";

export const setAuthStatus = createEvent<AuthStatus>();
