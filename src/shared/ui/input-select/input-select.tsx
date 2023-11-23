import clsx from "clsx";
import { ArrowRight, CheckIcon } from "../icons";
import styles from "./styles/input-select.module.scss";

type option = {
  id: number;
  selectName: string;
};

const InputSelect = ({
  isOpen,
  setIsOpen,
  options,
  onChange,
  select,
  colorSelect,
  checkBox,
  active,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  options?: option[];
  onChange?: (value: string) => void;
  select: string;
  colorSelect?: string;
  checkBox?: boolean;
  active?: boolean;
}) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(
        "outline-none transition-all bg-inputBG p-5 pl-[10px] rounded-xl text-textSecondary",
        colorSelect && "bg-mainBG",
      )}
    >
      <div className="flex w-full cursor-pointer justify-between border-b border-1px border-textSecondary pl-2 pb-2">
        <p className={clsx(styles[colorSelect || ""])}>{select}</p>
        <div className="rotate-90">
          <ArrowRight colorSelect={colorSelect} />
        </div>
      </div>
      <ul>
        {options?.map(
          (item) =>
            isOpen && (
              <div
                className={clsx(
                  checkBox && "flex w-full justify-between items-center",
                )}
                key={item.selectName}
              >
                <li
                  className={clsx(
                    " transition-colors duration-100 p-2 rounded-xl mt-5 cursor-pointer ",
                    !colorSelect && "hover:bg-mainColorAccent hover:text-white",
                    colorSelect && styles[colorSelect || ""],
                  )}
                  onClick={() => onChange?.(item.selectName)}
                >
                  {colorSelect
                    ? `Description: ${item.selectName}`
                    : item.selectName}
                </li>
                {checkBox && (
                  <div
                    onClick={() => onChange?.(String(item.id))}
                    key={item.selectName}
                    className="w-[30px] h-[30px] bg-mainBG border-2 border-mainColorAccent mt-5  flex justify-center items-center cursor-pointer"
                  >
                    {active && <CheckIcon />}
                  </div>
                )}
              </div>
            ),
        )}
      </ul>
    </div>
  );
};

export default InputSelect;
