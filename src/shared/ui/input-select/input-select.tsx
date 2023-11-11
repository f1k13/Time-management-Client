import { ArrowRight } from "../icons";

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
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  options: option[];
  onChange: (value: string) => void;
  select: string;
}) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="outline-none transition-all bg-inputBG p-5 pl-[10px] rounded-xl text-textSecondary"
    >
      <div className="flex w-full cursor-pointer justify-between border-b border-1px border-textSecondary px-2 pb-2">
        <p>{select}</p>
        <div className="rotate-90">
          <ArrowRight />
        </div>
      </div>
      <ul className="ease-in-out duration-300">
        {options.map(
          (item) =>
            isOpen && (
              <li
                className="text-textSecondary transition-colors duration-100 p-2 rounded-xl mt-5 cursor-pointer hover:bg-mainColorAccent hover:text-white"
                onClick={() => onChange(item.selectName)}
                key={item.id}
              >
                {item.selectName}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default InputSelect;
