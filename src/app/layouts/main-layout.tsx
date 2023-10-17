import { NavBar } from "../../widgets/navbar";
import { SideBar } from "@/widgets/sidebar/ui";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[81px]">
        <NavBar />
      </div>
      <div className="flex flex-1 w-full">
        <SideBar />
        <div className="p-[16px] w-full h-full">
          <div className="bg-mainBG w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
