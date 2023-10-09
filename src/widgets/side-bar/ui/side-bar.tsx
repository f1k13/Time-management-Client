import { sideBarData } from "../lib/side-bar-data";

const SideBar = () => {
  return (
    <div className="border-r px-5 py-5 bg-mainBG border-mainBorder flex flex-col w-[250px] h-full">
      <h1 className="text-titleSideBar text-14px uppercase">Your workspace</h1>
      <div className="flex cursor-pointer flex-col mt-5 justify-between">
        {sideBarData.map((item) => (
          <div className="flex items-center mt-5" key={item.id}>
            <div>{item.icon}</div>
            <p className="text-white ml-5">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
