import SearchBar from "./SearchBar";
import UserAvator from "./UserAvator";

export default function Header() {
  return (
    <header className="grid bg-white grid-cols-3  justify-center items-center pr-[42px] w-full">
      <div />
      <SearchBar />
      <UserAvator />
    </header>
  );
}
