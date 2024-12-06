import clsx from "clsx";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { CountedListModel } from "../../models";

export function CountedListStatusIcon({
  record,
}: {
  record: CountedListModel;
}) {
  let icon;
  let status;

  const { previousQty, count, skipped } = record;

  if (skipped) {
    icon = <HiChevronDoubleRight className="-mt-1" />;
    status = "Skipped";
  } else if (count === previousQty) {
    icon = <IoMdCheckmarkCircle className="-mt-1" />;
    status = "Done";
  } else {
    icon = <HiExclamationTriangle className="-mt-1" />;
    status = "Variance";
  }

  return (
    <span
      className={clsx(
        "counted-status flex h-11 items-center gap-1",
        status.toLowerCase(),
      )}
    >
      {icon}
      {status}
    </span>
  );
}
