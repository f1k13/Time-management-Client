import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { NotificationHandler } from "@/shared/ui/notification-handler";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <NotificationHandler />
      {children}
    </BrowserRouter>
  );
};

export default Providers;
