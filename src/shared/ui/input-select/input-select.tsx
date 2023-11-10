type option = {
  id: string;
  selectName: string;
};

const InputSelect = ({
  id,
  options,
  onChange,
}: {
  id: string;
  options: option[];
  onChange: (value: string) => void;
}) => {
  return (
    <select
      className="outline-none bg-inputBG py-5 pl-[10px] rounded-xl text-textSecondary"
      onChange={(e) => onChange(e.target.value)}
      id={id}
    >
      {options.map((item) => (
        <option className="text-textSecondary " key={item.id}>
          {item.selectName}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
