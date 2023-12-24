import { Notes } from "@/features/notes-week-item/model/notes";
import { InputSelect } from "@/shared/ui/input-select";
import { useState } from "react";

const NotesItem = ({ item }: { item: Notes }) => {
  const options = [{ id: item.id, selectName: item.title }];
  const [visible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="w-full">
      <InputSelect
        isOpen={visible}
        setIsOpen={setIsVisible}
        select={item.date}
        options={options}
      />
    </div>
  );
};

export default NotesItem;
