import AppRouter from "@/app/AppRouter";
import { SideBar } from "@/widgets/header/ui";
import { BrowserRouter } from "react-router-dom";


const MainLayot = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default MainLayot;
