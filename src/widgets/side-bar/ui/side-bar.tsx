import { useNavigate } from "react-router-dom";
import { sideBarData } from "../lib/side-bar-data";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-r px-5 py-5 bg-mainBG border-mainBorder flex flex-col w-[350px] h-full">
      <h1 className="text-secondaryTextColor text-14px uppercase">
        Your workspace
      </h1>
      <div className="flex cursor-pointer flex-col mt-5 justify-between">
        {sideBarData.map((item) => (
          <div
            onClick={() => navigate(item.link || "")}
            className="flex items-center w-full h-10 pl-2 mt-5 hover:bg-secondaryActiveColor rounded-xl active:bg-activeColor"
            key={item.id}
          >
            <div>{item.icon}</div>
            <p className="text-white ml-5">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
