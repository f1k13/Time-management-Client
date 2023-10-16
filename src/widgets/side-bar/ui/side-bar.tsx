import { useNavigate } from "react-router-dom";
import { sideBarData } from "../lib/side-bar-data";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-r px-5 py-5 bg-mainBG border-mainBorder flex flex-col w-[220px] h-full">
      <h1 className="text-secondaryTextColor text-14px uppercase">
        Your workspace
      </h1>
      <ul className="flex cursor-pointer flex-col mt-[24px] justify-between">
        {sideBarData.map((item) => (
          <li
            onClick={() => navigate(item.path || "")}
            className="flex items-center w-[full] h-[27px] py-[15px] pl-[5px] mt-5 hover:bg-secondaryActiveColor rounded-xl active:bg-activeColor"
            key={item.id}
          >
            <div>{item.icon}</div>
            <p className="text-white ml-5">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
