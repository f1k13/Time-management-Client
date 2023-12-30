import { $notes } from "@/features/notes-week-item/model/notes";
import { useStore } from "effector-react";
import { $user } from "@/entities/user/model/user";
import { NotesItem } from "@/features/notes-item/ui";
import { getNotesFx } from "../lib/get-notes";
import clsx from "clsx";
import styles from "../styles/notes-list.module.scss";
import { deleteNoteFx } from "@/features/notes-item/lib/delete-note";
import { addAlert } from "@/entities/alert/lib/alert-events";
const NotesList = () => {
  const notes = useStore($notes);
  const user = useStore($user);
  const deleteNote = async (id: number) => {
    await deleteNoteFx(id);
    await getNotesFx(user.id);
    addAlert({
      type: "info",
      text: "Note removed",
    });
  };
  return (
    <div
      className={clsx(
        "w-full px-[28px] flex flex-col overflow-y-auto h-[400px] gap-4 pt-[80px] pb-[20px]",
        styles.root
      )}
    >
      {notes.map((item) => (
        <NotesItem deleteNote={deleteNote} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default NotesList;
