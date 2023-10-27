import { useNavigate } from "react-router-dom";
import { sidebarData } from "../lib/sidebar-data.tsx";
import clsx from "clsx";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="border-r px-5 py-5 bg-mainBG border-mainBorder flex flex-col w-[220px] h-full">
      <h1 className="text-secondaryTextColor text-14px uppercase">
        Your workspace
      </h1>
      <ul className="flex cursor-pointer w-full flex-col mt-[24px] justify-between">
        {sidebarData.map((item) => (
          <li
            onClick={() => navigate(item.path || "")}
            className={clsx(
              "flex items-center w-[full] h-[27px] py-[20px] pl-[5px] mt-5  rounded-xl hover:bg-mainColorAccent"
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
