import { Notes } from "@/features/notes-week-item/model/notes";
import { RemoveIcon } from "@/shared/ui/icons";

const NotesItem = ({
  item,
  deleteNote,
}: {
  item: Notes;
  deleteNote: (id: number) => void;
}) => {
  return (
    <div className="w-full bg-inputBG py-2 px-5 rounded-2xl flex justify-between items-center">
      <p className="text-mainColorAccent text-20px">{item.title}</p>
      <div className="flex items-center pr-5 gap-5">
        <p className="text-mainColorAccent text-20px">{item.date}</p>
        <button onClick={() => deleteNote(item.id)}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
