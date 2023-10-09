import { sideBarData } from "../lib/side-bar-data";

const SideBar = () => {
  return (
    <div className="border-r border-mainBorder flex flex-col w-[220px] h-full">
      <h1 className="text-titleSideBar text-lg uppercase">Your workspace</h1>
      <div className="flex flex-col mt-5 justify-between">
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
