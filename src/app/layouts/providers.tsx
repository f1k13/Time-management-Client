import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { AlertDisplay } from "../../entities/alert/ui";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <AlertDisplay />
      {children}
    </BrowserRouter>
  );
};

export default Providers;
