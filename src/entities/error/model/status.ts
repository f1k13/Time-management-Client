import { createStore } from "effector";
import { setErrorEvent, setSuccessEvent } from "../lib/status-events";

export const $status = createStore<"error" | "success" | null>(null)
  .on(setErrorEvent, () => "error")
  .on(setSuccessEvent, () => "success");
