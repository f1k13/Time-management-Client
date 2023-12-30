import { NOTES_ROUTE } from "@/app/routes/paths";
import { $user } from "@/entities/user/model/user";
import { $notes } from "@/features/notes-week-item/model/notes";
import { getNotesFx } from "@/widgets/notes-list/lib/get-notes";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const HomeNotes = () => {
  const notes = useStore($notes);
  const user = useStore($user);
  const navigate = useNavigate();
  useEffect(() => {
    getNotesFx(user.id);
  }, []);

  return (
    <div className="w-1/2 h-[200px] p-5 flex  flex-col rounded-2xl shadow-outlineBlock">
      <h2 className="text-white text-32px font-bold text-center">Your notes</h2>
      {notes.length !== 0 && (
        <>
          <div className="flex items-center gap-2">
            <p className="text-mainColorAccent text-20px font-bold">
              Yor first note:
            </p>
            <button
              onClick={() => navigate(NOTES_ROUTE)}
              className="text-secondaryColor text-20px font-normal cursor-pointer"
            >
              {notes[0].title}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-mainColorAccent text-20px font-bold">
              Yor last note:
            </p>
            <button
              onClick={() => navigate(NOTES_ROUTE)}
              className="text-secondaryColor text-20px font-normal cursor-pointer"
            >
              {notes[notes.length - 1].title}
            </button>
          </div>
        </>
      )}
      {!notes.length && (
        <p className="text-mainColorAccent text-20px">No have note</p>
      )}
    </div>
  );
};

export default HomeNotes;
