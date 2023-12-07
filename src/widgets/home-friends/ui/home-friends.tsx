import { useStore } from "effector-react";
import { $user, $users } from "@/entities/user/model/user.ts";
import { HomeFriendItem } from "@/features/home-friend-item/ui";
import { useEffect } from "react";
import { getAllUsers } from "@/entities/user/lib/user-effects.ts";

const HomeFriends = () => {
  const users = useStore($users);
  const user = useStore($user);

  const filterUserFriends = user.friends?.map((item) => {
    const find = users.find((user) => user.id === item);
    return find;
  });
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="w-full h-full">
      <div className="border flex flex-col items-center border-mainBorder h-[700px] w-[70%] rounded-2xl p-5">
        <h2 className="text-white text-36px font-bold text-center">
          Your friends
        </h2>
        {!filterUserFriends && (
          <p className="text-mainColorAccent text-20px font-normal">
            you haven't added any friends yet.
          </p>
        )}
        {filterUserFriends &&
          filterUserFriends?.map(
            (item) => item && <HomeFriendItem key={item.id} item={item} />,
          )}
      </div>
    </div>
  );
};

export default HomeFriends;
