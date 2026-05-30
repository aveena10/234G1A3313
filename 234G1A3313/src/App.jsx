
import { log } from "./logging middleware/logger";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    log(
      "info",
      "notifications/api",
      "Displayed top unread notifications"
    );
  }, []);

  return (
    <div>
      <h1>My Notification App</h1>
    </div>
  );
}

export default App;