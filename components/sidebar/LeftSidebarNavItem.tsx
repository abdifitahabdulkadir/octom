"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip } from "react-tooltip";
interface Props {
  image_url: string;
  href: string;
  alt: string;
  inactiveIcon: string;
}
export default function LeftSidebarNavItem({
  image_url,
  inactiveIcon,
  href,
  alt,
}: Props) {
  const pathName = usePathname();

  return (
    <li
      className={` size-[46px] rounded-[14px] flex items-center justify-center ${
        pathName === href ? "bg-primary" : "bg-none"
      }`}
    >
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content={href === "/" ? "Dashboard" : href.substring(1)}
        data-tooltip-place="top"
        href={href}
      >
        <Tooltip className="capitalize" id="my-tooltip" />
        <Image
          src={pathName === href ? image_url : inactiveIcon}
          alt={alt}
          height={20}
          width={20}
        />
      </Link>
    </li>
  );
}
