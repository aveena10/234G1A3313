import { useEffect } from "react";
import { log } from "../middleware/logger";

function NotificationList({ notifications }) {
  useEffect(() => {
    log(
      "info",
      "notifications/ui",
      `Displayed ${notifications.length} notifications`
    );
  }, [notifications]);

  return (
    <div>
      {/* render notifications */}
    </div>
  );
}