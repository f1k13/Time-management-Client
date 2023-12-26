import { FormEvent, useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { notesForm } from "@/features/notes-week-item/model/notes-form-state.ts";
import { addAlert } from "@/entities/alert/lib/alert-events.ts";
import { createNoteFx } from "../lib/create-note-fx";
import { User } from "@/entities/user/model/user";

const NotesWeekItem = ({ item, user }: { item: string; user: User }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { fields, submit } = useForm(notesForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    if (fields.title.value) {
      setIsVisible(!isVisible);
      addAlert({
        type: "success",
        text: "Note added",
      });
      createNoteFx({
        title: fields.title?.value,
        date: item,
        userId: user.id,
      });
      fields.title.onChange("");
    }
  };
  return (
    <div className="w-[170px] py-5 px-2 h-[204px] flex flex-col items-center rounded-2xl bg-mainBG">
      <p className="text-secondaryColor text-20px font-bold">{item}</p>
      {isVisible && (
        <Modal setIsVisible={setIsVisible}>
          <div className="flex flex-col items-start gap-6 px-5 w-full">
            <p className="text-20px text-white ">{item}</p>
            <form className="flex flex-col gap-10 w-full" onSubmit={onSubmit}>
              <TextField
                value={fields.title?.value}
                error={fields.title?.firstError?.rule}
                label="Title:"
                placeholder="Enter your note"
                onChange={(e) => fields.title?.onChange(e.target.value)}
              />
              <button
                className="w-full bg-mainColorAccent hover:bg-mainColorAccentSecondary text-white py-2 transition-colors duration-200 rounded-2xl"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </Modal>
      )}
      <button
        className=" text-white mt-[50px] transition-colors duration-200 hover:bg-mainColorAccentSecondary bg-mainColorAccent rounded-lg w-full  py-2 text-16px"
        onClick={() => setIsVisible(!isVisible)}
      >
        Add note
      </button>
    </div>
  );
};

export default NotesWeekItem;
