import Image from "next/image";

interface Props {
  title: string;
  metricUrl: string;
  iconUrl: string;
  value: string;
  change: string;
  changeLabel: string;
  id: number;
}
export default function OverviewCardItem({
  title,
  metricUrl,
  iconUrl,
  value,
  change,
  changeLabel,
  id,
}: Props) {
  return (
    <li className="bg-white rounded-[16px] flex flex-col gap-[30px] w-[274px] h-[210px] px-[20px] py-[22px]">
      <div className="flex items-center gap-[12px] pb-[26px] border-b border-gray">
        <div className="size-[34px] rounded-full bg-white-alt grid place-content-center ">
          <Image src={iconUrl} alt={title} width={16} height={16} />
        </div>
        <h2 className="font-medium text-[1rem] text-gray-alt ">{title}</h2>
        <span className="ml-auto block font-bold text-[1.375rem] text-black-alt ">
          {value}
        </span>
      </div>
      <div className="flex w-full gap-[8px] items-center justify-between">
        <Image src={metricUrl} alt={title} width={115} height={50} />
        <p className="font-medium text-[1rem] flex flex-col text-blue-gray">
          <span className="font-bold text-green self-end me-0.5">
            {change}
            <span className="text-blue-gray font-medium">More</span>
          </span>
          <span>{changeLabel}</span>
        </p>
      </div>
    </li>
  );
}
