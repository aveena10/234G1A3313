import { log } from "../middleware/logger";

export const prioritizeNotifications = (notifications) => {
  const sorted = [...notifications].sort(
    (a, b) => b.priority - a.priority
  );

  log(
    "info",
    "notifications/prioritization",
    "Ranked notifications by priority"
  );

  return sorted;
};