import GraphicCard from "@/components/main/GraphicCard";
import OverviewCards from "@/components/main/OverviewCards";
import RecommendedTasks from "@/components/main/RecommendedTasks";
import { TASKS } from "@/lib/constants";

export default function Dashboard() {
  return (
    <div className="w-full grid gap-[40px] grid-cols-[3fr_1fr] h-full bg-secondary">
      <div className="w-full h-full py-[30px] pl-[40px] flex flex-col gap-[30px]">
        <OverviewCards />
        <GraphicCard />
        <div className="w-full flex flex-col gap-[20px] h-fit">
          {TASKS.map((eachTask, index) => {
            return <RecommendedTasks key={index} {...eachTask} />;
          })}
        </div>
      </div>
      <div className="w-full h-full bg-white pr-[42px]">RightSidebar</div>
    </div>
  );
}
