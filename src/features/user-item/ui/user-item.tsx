import { PeopleType } from "@/widgets/friends-search/model/peoples.ts";
import { AddIcon } from "@/shared/ui/icons";
import { User } from "@/entities/user/model/user.ts";

const UserItem = ({
  item,
  user,
  sendFriend,
}: {
  item: PeopleType;
  user: User;
  sendFriend: (id: number) => void;
}) => {
  if (user.id === item.id) return null;
  return (
    <div className="bg-activeColor mt-5 justify-between px-5 rounded-2xl w-full flex items-center pl-5 h-[53px]">
      <h2 className="text-successColor">{item.username}</h2>
      <div className="cursor-pointer" onClick={() => sendFriend(item.id)}>
        <AddIcon />
      </div>
    </div>
  );
};

export default UserItem;
