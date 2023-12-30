import { TextField } from "@/shared/ui/text-field";
import { useForm } from "effector-forms";
import { workForm } from "../model/work-form-state";
import { FormEvent, useEffect, useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { createPlanFx } from "../lib/create-plan";
import { User } from "@/entities/user/model/user";
import { addAlert } from "@/entities/alert/lib/alert-events";
import { getHouseTotalFx } from "../lib/get-house-work";

const PlanItem = ({ item, user }: { item: string; user: User }) => {
  const { fields, submit } = useForm(workForm);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fields.startTime.value && fields.endTime.value) {
      submit();
      if (Number(fields.startTime.value) > Number(fields.endTime.value)) {
        addAlert({
          type: "error",
          text: "End time must be greater than start time",
        });
      } else {
        createPlanFx({
          startTime: Number(fields.startTime?.value),
          endTime: Number(fields.endTime?.value),
          date: item,
          userId: user.id,
        });
        fields.endTime.onChange("");
        fields.startTime.onChange("");
        setIsVisible(false);
      }
    }
  };
  useEffect(() => {
    getHouseTotalFx(user.id);
  }, []);
  return (
    <div className="bg-activeColor flex flex-col items-center p-2 text-white w-full h-[120px] rounded-2xl">
      <p className="text-white text-20px font-bold">{item}</p>
      {isVisible && (
        <Modal setIsVisible={setIsVisible}>
          <form
            onSubmit={onSubmit}
            className="mt-5 flex flex-col gap-3"
            action=""
          >
            <TextField
              value={fields.startTime?.value}
              onChange={(e) => fields.startTime.onChange(e.target.value)}
              error={fields.startTime?.firstError?.rule}
              label="Start work time"
              placeholder="00:00"
              type="number"
            />
            <TextField
              value={fields.endTime?.value}
              onChange={(e) => fields.endTime.onChange(e.target.value)}
              error={fields.endTime?.firstError?.rule}
              label="End work time"
              placeholder="23:00"
              type="number"
            />
            <button
              type="submit"
              className="bg-mainColorAccent py-2 w-full mt-5 rounded-xl text-20px transition-colors duration-300 text-white font-bold hover:bg-textSecondary"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-mainColorAccent py-2 w-full mt-5 rounded-xl text-20px transition-colors duration-300 text-white font-bold hover:bg-textSecondary"
      >
        Add work time
      </button>
    </div>
  );
};

export default PlanItem;
