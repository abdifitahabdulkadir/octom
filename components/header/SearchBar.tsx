"use client";

import Image from "next/image";

export default function SearchBar() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-lightgray rounded-[7px] w-[290px] h-[44px] flex items-center gap-[10px] px-[20px] py-[12px]"
    >
      <input
        type="text"
        placeholder="Search anything..."
        className="focus:outline-0 flex-1 placeholder:text-[0.875rem] placehoder:font-normal placeholder:text-primary"
      />
      <button className="ml-auto">
        <Image src="/icons/search.svg" alt="search" width={20} height={20} />
      </button>
    </form>
  );
}
