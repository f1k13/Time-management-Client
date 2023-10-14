import { BurgerMenuIcon, NotificationIcon } from "@/shared/ui/icons";

const NavBar = () => {
  return (
    <div className="bg-mainBG w-full h-full flex justify-between items-center px-[20px] border-b border-mainBorder">
      <h1 className="flex text-20px text-mainColorAccent">
        .time <h1 className="text-secondaryColor">managment</h1>
      </h1>
      <div className="flex gap-[42px]">
        <NotificationIcon />
        <BurgerMenuIcon />
      </div>
    </div>
  );
};

export default NavBar;
