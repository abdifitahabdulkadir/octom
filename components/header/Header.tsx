import SearchBar from "./SearchBar";
import UserAvator from "./UserAvator";

export default function Header() {
  return (
    <header className="grid  w-full h-full bg-white grid-cols-3 justify-center items-center pr-[42px]">
      <div></div>
      <SearchBar />
      <UserAvator />
    </header>
  );
}
