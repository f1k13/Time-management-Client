import { Notes } from "@/features/notes-week-item/model/notes";
import { RemoveIcon } from "@/shared/ui/icons";
import { deleteNoteFx } from "../lib/delete-note";
import { addAlert } from "@/entities/alert/lib/alert-events";

const NotesItem = ({ item }: { item: Notes }) => {
  const deleteNote = () => {
    deleteNoteFx(item.id);
    addAlert({
      type: "success",
      text: "Note removed",
    });
  };
  return (
    <div className="w-full bg-inputBG py-2 px-5 rounded-2xl flex justify-between items-center">
      <p className="text-mainColorAccent text-20px">{item.title}</p>
      <div className="flex items-center pr-5 gap-5">
        <p className="text-mainColorAccent text-20px">{item.date}</p>
        <button onClick={() => deleteNote()}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
