import { LEFTSIDEBAR_NAV_LINKS } from "@/lib/constants";
import LeftSidebarNavItem from "./LeftSidebarNavItem";

export default function LeftSidebarNav() {
  return (
    <nav>
      <ul className="flex flex-col  gap-[20px]">
        {LEFTSIDEBAR_NAV_LINKS.map((item, index) => {
          return <LeftSidebarNavItem key={index} {...item} />;
        })}
      </ul>
    </nav>
  );
}
