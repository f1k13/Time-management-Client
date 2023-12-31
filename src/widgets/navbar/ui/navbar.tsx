import { HOME_ROUTE } from "@/app/routes/paths";
import { useNavigate } from "react-router-dom";
import { Notifications } from "@/features/notifications/ui";
import { BurgerMenu } from "@/features/burger-menu/ui";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-mainBG w-full h-full flex justify-between items-center p-[20px] border-b border-mainBorder">
      <h1
        onClick={() => navigate(HOME_ROUTE)}
        className="flex text-20px text-mainColorAccent cursor-pointer"
      >
        .time <span className="text-secondaryColor">management</span>
      </h1>
      <div className="flex w-full justify-end gap-[42px]">
        <Notifications />
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
