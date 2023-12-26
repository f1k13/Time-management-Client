import { $user } from "@/entities/user/model/user";
import { $notes } from "@/features/notes-week-item/model/notes";
import { useStore } from "effector-react";
import { useEffect } from "react";
const HomeNotes = () => {
  const notes = useStore($notes);
  const user = useStore($user);
  console.log(notes);
  useEffect(() => {}, []);

  return (
    <div className="w-1/2 h-[200px] p-5 flex  flex-col rounded-2xl shadow-outlineBlock">
      <h2 className="text-white text-32px font-bold text-center">Your notes</h2>
    </div>
  );
};

export default HomeNotes;
