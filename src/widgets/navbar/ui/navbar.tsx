import { CALENDAR_ROUTE } from "@/app/routes/paths";
import { BurgerMenuIcon, NotificationIcon } from "@/shared/ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-mainBG w-full h-full flex justify-between items-center p-[20px] border-b border-mainBorder">
      <h1
        onClick={() => navigate(CALENDAR_ROUTE)}
        className="flex text-20px text-mainColorAccent cursor-pointer"
      >
        .time <span className="text-secondaryColor">managment</span>
      </h1>
      <div className="flex gap-[42px]">
        <NotificationIcon />
        <BurgerMenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
