import Image from "next/image";

export default function UserAvator() {
  return (
    <div className="justify-self-end flex items-center gap-[38px]">
      <div className="size-[24px] relative">
        <Image src="/icons/alarm.svg" alt="alarm icon" width={18} height={18} />
        <span className="absolute flex items-center justify-center top-0 right-0 size-[11px] bg-dark-blue rounded-full font-bold text-[8px] text-white">
          2
        </span>
      </div>
      <div className="rounded-full flex items-center justify-center size-[40px] bg-lightblue">
        <Image src="/icons/avator.svg" alt="user icon" width={30} height={30} />
      </div>
      <Image
        src="/icons/down-arrow.svg"
        alt="dropdown icon"
        width={20}
        height={20}
        className="-ml-[34px]"
      />
    </div>
  );
}
