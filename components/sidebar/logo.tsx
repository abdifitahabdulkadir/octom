import Image from "next/image";

export default function logo() {
  return (
    <figure className="size[35px]">
      <Image
        src="/icons/logo.svg"
        alt="logo"
        width={100}
        height={100}
        priority
        className="size-full "
      />
      <figcaption className="font-black text-[1rem] text-primary">
        OCTOM.
      </figcaption>
    </figure>
  );
}
