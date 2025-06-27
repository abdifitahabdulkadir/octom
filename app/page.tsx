import OverviewCards from "@/components/main/OverviewCards";

export default function Dashboard() {
  return (
    <div className="w-full grid gap-[40px] grid-cols-[1fr_396px] h-full bg-secondary ">
      <div className="w-full h-full py-[30px] pl-[40px]">
        <OverviewCards />
      </div>
      <div className="w-full h-full bg-white pr-[42px]">RightSidebar</div>
    </div>
  );
}
