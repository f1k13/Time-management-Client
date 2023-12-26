import { FriendItem } from "@/entities/friend-item/ui";
import { User } from "@/entities/user/model/user.ts";

const FriendsList = ({
  filterUserRequest,
  filterUserFriends,
  user,
}: {
  filterUserRequest?: (User | undefined)[];
  filterUserFriends?: (User | undefined)[];
  user: User;
}) => {
  return (
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
              )
          )}
        {!filterUserRequest && (
          <p className="text-white text-24px font-normal">No have requests</p>
        )}
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
              )
          )}
        <p className="text-white text-24px font-normal">
          {!filterUserFriends?.length && "No friends"}
        </p>
      </div>
    </div>
  );
};

export default FriendsList;
