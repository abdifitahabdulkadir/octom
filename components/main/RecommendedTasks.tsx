import Image from "next/image";
import Link from "next/link";

export default function RecommendedTasks({
  icon,
  title,
  link,
  startTime,
  completion,
  comments,
}: TaskType) {
  return (
    <article className="bg-white h-fit rounded-[10px] overflow-clip  flex items-center  gap-[32px] pr-[26px]  taskDropShadow">
      <div className="flex  bg-cream h-full gap-[16px] px-[25px] py-[19px] items-center">
        <div className="bg-dark-sky size-[35] rounded-full grid place-content-center">
          <Image src={icon} alt="icon" width={12} height={12} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-medium text-black text-[.9rem] ">Start From</h2>
          <p className="text-dark-forest font-medium text-[0.8rem] flex items-center gap-[5px]">
            <Image src="/icons/timer.svg" alt="clock" width={12} height={12} />
            {startTime}
          </p>
        </div>
      </div>
      <div className="flex flex-col px-[25px] py-[19px] gap-[10px]">
        <h2 className="font-medium text-[1rem] text-primary ">{title}</h2>
        <div className="flex items-center gap-[10px]">
          <Link
            href={"/"}
            className="flex items-center gap-[10px] font-medium text-[.8rem] text-dusk-blue group"
          >
            <Image src={"/icons/link.svg"} alt="link" width={12} height={12} />
            <span className="group-hover:underline  transition-alll duration-300">
              {link.substring(link.indexOf("www."))}
            </span>
          </Link>
          <p className="flex items-center gap-[10px] border-l border-light-beige pl-[13px]">
            <Image src="/icons/chat.svg" alt="chat" width={18} height={18} />
            <span className="font-medium capitalize text-[.8rem] text-dark-forest ">
              {comments} comments
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-medium tex-primary text-[1rem] ">
          {completion + "%"} Completion
        </h2>
        <div className="bg-lightgray-alt rounded-[16px] relative isolate h-[8px] w-full max-w-[200px] ">
          <div
            style={{
              width: `${completion}%`,
            }}
            className={`${
              completion > 50 ? " bg-dusk-blue" : "bg-light-teal"
            } h-full  rounded-[16px]`}
          />
        </div>
      </div>
      <div className="bg-wheat ml-auto rounded-[9px]  items-center flex gap-[10px] px-[17px] py-[10px] max-w-[120px]">
        <Image
          src={"icons/blue-alarm.svg"}
          alt="alarm"
          width={16}
          height={16}
        />
        <span className="text-dark-sky font-medium text-[.8rem]">
          Remainder
        </span>
      </div>
    </article>
  );
}
