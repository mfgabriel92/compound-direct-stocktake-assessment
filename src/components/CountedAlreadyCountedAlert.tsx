import { ReactNode } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { renderUnitOrUnitsText } from "../utils";
import { Alert } from "./ui/Alert";

interface Props {
  priorQuantity?: number;
  countValue?: number;
  variant?: "success" | "warning" | "neutral";
  title?: string;
  icon?: ReactNode;
}

function StockAlert({
  priorQuantity,
  countValue,
  variant,
  title,
  icon,
}: Props) {
  return (
    <Alert variant={variant!}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {icon}
          <strong>{title}</strong>
        </div>
        {variant !== "neutral" &&
          priorQuantity !== undefined &&
          countValue !== undefined && (
            <div className="flex items-center gap-3">
              <p>
                <strong>Prior quantity: </strong>
                {renderUnitOrUnitsText(priorQuantity)}
              </p>
              <p>
                <strong>Recorded count: </strong>
                {renderUnitOrUnitsText(countValue)}
              </p>
            </div>
          )}
      </div>
    </Alert>
  );
}

export function SuccessAlert(props: Props) {
  return (
    <StockAlert
      {...props}
      variant="success"
      title="This stock has already been counted"
      icon={<IoMdCheckmarkCircle className="-mt-1" size={21} />}
    />
  );
}

export function WarningAlert(props: Props) {
  return (
    <StockAlert
      {...props}
      variant="warning"
      title="This stock has already been counted (Variance detected)"
      icon={<HiExclamationTriangle className="-mt-1" size={21} />}
    />
  );
}

export function NeutralAlert() {
  return (
    <StockAlert
      variant="neutral"
      title="This stock has been skipped"
      icon={<HiChevronDoubleRight className="-mt-1" size={18} />}
    />
  );
}
