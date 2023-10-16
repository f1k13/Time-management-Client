import { BurgerMenuIcon, NotificationIcon } from "@/shared/ui/icons";
import { addAlert } from "@/entities/alert/lib/alert-events.ts";

const Navbar = () => {
  return (
    <div className="bg-mainBG w-full h-full flex justify-between items-center px-[20px] border-b border-mainBorder">
      <h1
        className="flex text-20px text-mainColorAccent"
        onClick={() => addAlert({ text: "test", type: "success" })}
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
