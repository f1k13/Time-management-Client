import {
  DashboardType,
  Tab,
} from "@/widgets/progress-dashboard/lib/data-dasboard";
import clsx from "clsx";

const Tabs = ({
  tabs,
  active,
  setActive,
}: {
  tabs: Tab[];
  active: string;
  setActive: (id: DashboardType) => void;
}) => {
  console.log(active);
  return (
    <div className="flex w-full gap-10 items-center justify-center  ">
      {tabs.map((item) => (
        <p
          className={clsx(
            "text-white text-16px bg-transparent cursor-pointer shadow-outlineBlock px-2 rounded-2xl",
            active === item.id && "bg-mainColorAccent"
          )}
          onClick={() => setActive(item.id)}
          key={item.id}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default Tabs;
