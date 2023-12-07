import { HomeFriends } from "@/widgets/home-friends/ui";
import { HomeTask } from "@/features/home-task/ui";

const HomePage = () => {
  return (
    <div className="flex w-full p-5">
      <HomeFriends />
      <HomeTask />
    </div>
  );
};

export default HomePage;
