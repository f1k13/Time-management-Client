import { HomeFriends } from "@/widgets/home-friends/ui";
import { HomeTask } from "@/features/home-task/ui";
import { HomeNotes } from "@/features/home-notes/ui";
import HomeWorkTime from "@/features/home-work-time/ui/home-work-time";
const HomePage = () => {
  return (
    <div className="flex w-full p-5">
      <HomeFriends />
      <div className="w-full gap-[40px] flex flex-col items-end">
        <HomeTask />
        <HomeNotes />
        <HomeWorkTime />
      </div>
    </div>
  );
};

export default HomePage;
