import { User } from "@/entities/user/model/user.ts";
import { AcceptIcon, RejectIcon } from "@/shared/ui/icons";
import { addFriendFx } from "@/widgets/friends-search/lib/friend-effect.ts";

const RequestFriendItem = ({ item, user }: { item: User; user: User }) => {
  return (
    <div className="bg-secondaryActiveColor mt-5 py-2 w-[300px] flex items-center justify-between  px-2 text-successColor pl-5 rounded-2xl ">
      <p className="text-successColor text-24px">{item.username}</p>
      <div className="flex justify-between items-center gap-6 pr-2">
        <button
          onClick={() => addFriendFx({ userId: user.id, friendId: item.id })}
        >
          <AcceptIcon />
        </button>
        <button>
          <RejectIcon />
        </button>
      </div>
    </div>
  );
};

export default RequestFriendItem;
