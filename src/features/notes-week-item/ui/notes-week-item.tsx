import { useState } from "react";
import { Modal } from "@/shared/ui/modal";

const NotesWeekItem = ({ item }: { item: string }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="w-[120px]">
      <div className="bg-textSecondary py-2  text-center rounded-lg">
        <p className="text-white">{item}</p>

        {isVisible && (
          <Modal setIsVisible={setIsVisible}>
            <div>asd</div>
          </Modal>
        )}
      </div>
      <button
        className=" text-white mt-5 bg-mainColorAccentSecondary rounded-lg p-2 text-12px"
        onClick={() => setIsVisible(!isVisible)}
      >
        Add a plan for working hours
      </button>
    </div>
  );
};

export default NotesWeekItem;
