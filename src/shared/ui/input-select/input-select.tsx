import clsx from "clsx";
import { ArrowRight } from "../icons";
import styles from "./input-select.module.scss";
type option = {
  id: string;
  selectName: string;
};

const InputSelect = ({
  isOpen,
  setIsOpen,
  options,
  onChange,
  select,
  colorSelect,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  options?: option[];
  onChange?: (value: string) => void;
  select: string;
  colorSelect?: string;
}) => {
  
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(
        "outline-none transition-all bg-inputBG p-5 pl-[10px] rounded-xl text-textSecondary",
        colorSelect && "bg-mainBG"
      )}
    >
      <div className="flex w-full cursor-pointer justify-between border-b border-1px border-textSecondary pl-2 pb-2">
        <p className={clsx(styles[colorSelect || ""])}>{select}</p>
        <div className="rotate-90">
          <ArrowRight colorSelect={colorSelect} />
        </div>
      </div>
      <ul className="ease-in-out duration-300">
        {options?.map(
          (item) =>
            isOpen && (
              <li
                className={clsx(
                  " transition-colors duration-100 p-2 rounded-xl mt-5 cursor-pointer ",
                  !colorSelect && "hover:bg-mainColorAccent hover:text-white",
                  colorSelect && styles[colorSelect || ""]
                )}
                onClick={() => onChange?.(item.selectName)}
                key={item.id}
              >
                {colorSelect
                  ? `Description: ${item.selectName}`
                  : item.selectName}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default InputSelect;
