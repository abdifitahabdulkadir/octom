import { OVERVIEW_CARDS } from "@/lib/constants";
import OverviewCardItem from "./OverviewCardItem";

export default function OverviewCards() {
  return (
    <ol className="w-full flex items-center gap-[24px]">
      {OVERVIEW_CARDS.map((card, index) => {
        return <OverviewCardItem {...card} key={index} />;
      })}
    </ol>
  );
}
