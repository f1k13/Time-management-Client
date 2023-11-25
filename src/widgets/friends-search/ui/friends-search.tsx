import { TextField } from "@/shared/ui/text-field";
import { useEffect, useState } from "react";
import { searchPeoplesFx } from "@/widgets/friends-search/lib/search-peoples-fx.ts";
import { useStore } from "effector-react";
import { $peoples } from "@/widgets/friends-search/model/peoples.ts";
import { UserItem } from "@/features/people-item/ui";

const FriendsSearch = () => {
  const [value, setValue] = useState<string>("");
  const users = useStore($peoples);
  useEffect(() => {
    value && searchPeoplesFx(value);
  }, [value]);
  return (
    <div className="p-[5px] w-full h-full">
      <h2 className="text-white text-32px ml-2 font-medium">Friends</h2>
      <div className="w-[40%] pt-[50px] h-full pl-[20px]">
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Search"
          placeholder="Enter username"
          rootClassName={"h-[60px]"}
        />
        <div className="bg-inputBG flex items-center pt-[10px] px-5 flex-col w-full rounded-2xl h-[350px] mt-[50px]">
          <h2 className="text-white text-32px font-bold">Peoples</h2>
          {users.map((item) => (
            <UserItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsSearch;
