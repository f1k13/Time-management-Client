import { createEvent } from "effector";
import { AlertType } from "../model/alert";

export const addAlert = createEvent<Omit<AlertType, "id">>();
export const deleteAlert = createEvent<string>()