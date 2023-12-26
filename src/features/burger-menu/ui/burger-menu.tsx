import { BurgerMenuIcon } from "@/shared/ui/icons";
import { useState } from "react";

const BurgerMenu = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  return (
    <div onClick={() => setIsVisible(!visible)}>
      <BurgerMenuIcon />
      {visible && <div></div>}
    </div>
  );
};

export default BurgerMenu;
