import { User } from "@/entities/user/model/user.ts";

const FriendItem = ({ item }: { item: User }) => {
  return <div>{item.username}</div>;
};

export default FriendItem;
