interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}
export default function ChartSwitchButton({
  children,
  onClick,
  isActive,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`font-medium pb-[9px]  cursor-pointer text-[1.125rem] ${
        isActive ? "text-blue border-b-2 border-blue  " : "text-primary"
      }`}
    >
      {children}
    </button>
  );
}
