import LeftSidebarNav from "./LeftSidebarNav";
import Logo from "./logo";

export default function LeftSidebar() {
  return (
    <section className="px-[15px] flex flex-col gap-[140px] py-[20px] bg-sidebar-color">
      <Logo />
      <LeftSidebarNav />
    </section>
  );
}
