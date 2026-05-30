import { log } from "../middleware/logger";
export const fetchNotifications = async () => {
  const notifications = await fetch(...);
  log(
    "info",
    "notifications/api",
    `Fetched ${notifications.length} notifications`
  );

  return notifications;
};