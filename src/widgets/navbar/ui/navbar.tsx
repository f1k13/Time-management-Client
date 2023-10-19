import { BurgerMenuIcon, NotificationIcon } from "@/shared/ui/icons";

const Navbar = () => {
  return (
    <div className="bg-mainBG w-full h-full flex justify-between items-center p-[20px] border-b border-mainBorder">
      <h1 className="flex text-20px text-mainColorAccent">
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
