import { PeopleType } from "@/widgets/friends-search/model/peoples.ts";
import { AddIcon } from "@/shared/ui/icons";

const UserItem = ({ item }: { item: PeopleType }) => {
  return (
    <div className="bg-activeColor mt-5 justify-between px-5 rounded-2xl w-full flex items-center pl-5 h-[53px]">
      <h2 className="text-successColor">{item.username}</h2>
      <div>
        <AddIcon />
      </div>
    </div>
  );
};

export default UserItem;
