import { SideBar } from "@/widgets/header/ui";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-[100px]">navbar</div>
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
