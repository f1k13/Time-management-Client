import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
