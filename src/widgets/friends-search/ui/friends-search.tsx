import { TextField } from "@/shared/ui/text-field";
import { useEffect, useState } from "react";
import { searchPeoplesFx } from "@/widgets/friends-search/lib/search-peoples-fx.ts";
import { useStore } from "effector-react";
import { $peoples } from "@/widgets/friends-search/model/peoples.ts";
import { UserItem } from "@/features/user-item/ui";
import { $user, $users } from "@/entities/user/model/user.ts";
import { sendRequestToFriendFx } from "@/widgets/friends-search/lib/friend-effect.ts";
import { FriendItem } from "@/features/request-friend-item/ui";
import styles from "../styles/friends-search.module.scss";
import clsx from "clsx";
import { getAllUsers } from "@/entities/user/lib/user-effects.ts";

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
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-1/2 items-center">
                <h2 className="text-mainColorAccent text-36px font-bold">
                  Friend requests
                </h2>
                {filterUserRequest &&
                  filterUserRequest?.map(
                    (item) =>
                      item && (
                        <FriendItem
                          friend={false}
                          user={user}
                          item={item}
                          key={item?.id}
                        />
                      ),
                  )}
                <p className="text-white text-24px font-normal">
                  {!filterUserRequest?.length && "No friend requests"}
                </p>
              </div>
              <div className="flex flex-col w-1/2 items-center">
                <h2 className="text-mainColorAccent text-36px font-bold">
                  Your friends
                </h2>
                {filterUserFriends &&
                  filterUserFriends?.map(
                    (item) =>
                      item && (
                        <FriendItem
                          friend={true}
                          user={user}
                          item={item}
                          key={item?.id}
                        />
                      ),
                  )}
                <p className="text-white text-24px font-normal">
                  {!filterUserFriends?.length && "No friends"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendsSearch;
