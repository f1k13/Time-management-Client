import { User } from "@/entities/user/model/user.ts";
import { RejectIcon } from "@/shared/ui/icons";

const HomeFriendItem = ({ item }: { item: User }) => {
  console.log(item);
  return (
    <div className="border-b flex justify-between items-center pr-2 mt-5 pb-2 w-full text-mainBorder">
      <p className="text-successColor text-20px font-normal">{item.username}</p>
      <RejectIcon />
    </div>
  );
};

export default HomeFriendItem;
