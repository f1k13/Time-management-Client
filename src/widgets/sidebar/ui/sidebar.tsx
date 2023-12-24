import { useLocation, useNavigate } from "react-router-dom";
import { sidebarData } from "../lib/sidebar-data.tsx";
import clsx from "clsx";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  sidebarData.map((item) => {
    if (item.path === location.pathname) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
  return (
    <div className="p-5 bg-mainBG border-r border-mainBorder h-full w-[220px] flex flex-col ">
      <h1 className="text-secondaryTextColor text-14px uppercase">
        Your workspace
      </h1>
      <ul className="flex cursor-pointer w-full flex-col justify-between">
        {sidebarData.map((item) => (
          <li
            onClick={() => navigate(item.path || "")}
            className={clsx(
              "flex items-center transition-colors duration-100 w-[full] h-[27px] py-[20px] pl-[5px] mt-5  rounded-xl hover:bg-secondaryActiveColor",
              item.active && "bg-mainColorAccent"
            )}
            key={item.id}
          >
            <div className="w-[20px]">{item.icon}</div>
            <p className="text-white ml-5">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
