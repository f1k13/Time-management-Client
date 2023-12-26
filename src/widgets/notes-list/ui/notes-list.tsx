import { $notes } from "@/features/notes-week-item/model/notes";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { $user } from "@/entities/user/model/user";
import { NotesItem } from "@/features/notes-item/ui";
import { getNotesFx } from "../lib/get-notes";
import clsx from "clsx";
import styles from "../styles/notes-list.module.scss";
const NotesList = () => {
  const notes = useStore($notes);
  const user = useStore($user);
  useEffect(() => {
    getNotesFx(user.id);
  }, []);
  return (
    <div
      className={clsx(
        "w-full px-[28px] flex flex-col overflow-y-auto h-[400px] gap-4 pt-[80px] pb-[20px]",
        styles.root
      )}
    >
      {notes.map((item) => (
        <NotesItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default NotesList;
