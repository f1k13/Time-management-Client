import { TextField } from "@/shared/ui/text-field";
import { useEffect, useState } from "react";
import { searchPeoplesFx } from "@/widgets/friends-search/lib/search-peoples-fx.ts";
import { useStore } from "effector-react";
import { $peoples } from "@/widgets/friends-search/model/peoples.ts";
import { UserItem } from "@/features/user-item/ui";
import { $user, $users } from "@/entities/user/model/user.ts";
import { sendRequestToFriendFx } from "@/widgets/friends-search/lib/friend-effect.ts";
import styles from "../styles/friends-search.module.scss";
import clsx from "clsx";
import { getAllUsers } from "@/entities/user/lib/user-effects.ts";
import { FriendsList } from "@/features/friends-list/ui";

const FriendsSearch = () => {
  const [value, setValue] = useState<string>("");
  const peoples = useStore($peoples);
  const user = useStore($user);
  const users = useStore($users);

  const sendFriend = (id: number) => {
    sendRequestToFriendFx({
      userId: user.id,
      friendId: id,
    });
  };

  const filterUserRequest = user.unacceptedRequests?.map((item) => {
    const find = users.find((user) => user.id === item);
    return find;
  });

  const filterUserFriends = user.friends?.map((item) => {
    const find = users.find((user) => user.id === item);
    return find;
  });

  if (!value) {
    peoples.length = 0;
  }
  console.log(filterUserFriends);
  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    value && searchPeoplesFx(value);
  }, [value]);

  return (
    <div className="p-[5px] w-full h-full ">
      <h2 className="text-white text-32px ml-2 font-medium">Friends</h2>
      <div className="w-full pt-[50px] h-full px-[20px]">
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Search"
          placeholder="Enter username"
          rootClassName={"h-[60px]"}
        />
        <div
          className={clsx(
            "bg-inputBG overflow-y-auto flex items-center pt-[10px] px-5 flex-col w-full rounded-2xl h-[350px] mt-[50px]",
            styles.root,
          )}
        >
          <h2 className="text-white text-32px font-bold">{value && "Users"}</h2>
          {peoples.map((item) => (
            <UserItem
              sendFriend={sendFriend}
              user={user}
              item={item}
              key={item.id}
            />
          ))}
          {!value && (
            <FriendsList
              filterUserRequest={filterUserRequest}
              filterUserFriends={filterUserFriends}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendsSearch;
