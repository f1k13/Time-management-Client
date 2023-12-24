import moment from "moment";
import { NotesWeekItem } from "@/features/notes-week-item/ui";
import { generateDays } from "../lib/generate-days";
import { $user } from "@/entities/user/model/user";
import { useStore } from "effector-react";

const Notes = () => {
  const today = moment();
  const user = useStore($user);
  return (
    <div className="w-full h-full p-[5px]">
      <div className="flex items-center gap-20">
        <h2 className="text-white text-32px ml-2 font-medium">Notes</h2>
        <p className="py-2 px-10 rounded-2xl text-white bg-mainColorAccent">
          {today.format("YYYY")}
        </p>
      </div>
      <div className="w-full flex justify-between rounded-2xl px-[28px] mt-[30px] h-[309px] bg-inputBG items-center ">
        {generateDays(today).map((item) => (
          <NotesWeekItem user={user} item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
