import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TableRow({ children, className }: Props) {
  return (
    <td className={clsx("border-b-[1px] border-gray-100", className)}>
      {children}
    </td>
  );
}
