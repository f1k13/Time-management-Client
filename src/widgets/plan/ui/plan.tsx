import moment from "moment";
import { useState } from "react";

import { NotesWeekItem } from "@/features/notes-week-item/ui";
import { ArrowLeft, ArrowRight } from "@/shared/ui/icons";
import { generateDays } from "@/widgets/plan/lib/generate-days.ts";

const Notes = () => {
  const today = moment();
  const [currentWeek, setCurrentWeek] = useState(today);
  const handlePlusWeek = () => {
    setCurrentWeek(moment(currentWeek).add(1, "week"));
  };
  const handleMinusWeek = () => {
    setCurrentWeek(moment(currentWeek).subtract(1, "week"));
  };
  return (
    <div className="w-full h-full p-[5px]">
      <h2 className="text-white text-32px ml-2 font-medium">Notes</h2>
      <div className="flex items-center w-full mt-20 px-5">
        <button
          className="bg-mainColorAccentSecondary rounded-lg p-2 flex justify-center items-center"
          onClick={handleMinusWeek}
        >
          <ArrowLeft />
        </button>
        <div className="w-full flex justify-center gap-[100px] items-center ">
          {generateDays(currentWeek).map((item) => (
            <NotesWeekItem item={item} key={item} />
          ))}
        </div>
        <button
          className="bg-mainColorAccentSecondary rounded-lg  flex justify-center items-center"
          onClick={handlePlusWeek}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Notes;
