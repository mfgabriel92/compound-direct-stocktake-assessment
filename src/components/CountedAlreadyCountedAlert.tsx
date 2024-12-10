import { HiChevronDoubleRight } from "react-icons/hi";
import { HiExclamationTriangle } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { renderUnitOrUnitsText } from "../utils";
import { Alert } from "./ui/Alert";

interface Props {
  priorQuantity: number;
  countValue: number;
}

export function SuccessAlert({ priorQuantity, countValue }: Props) {
  return (
    <Alert variant="success">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <IoMdCheckmarkCircle className="-mt-1" size={"21"} />
          <strong>This stock has already been counted</strong>
        </div>
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
      </div>
    </Alert>
  );
}

export function WarningAlert({ priorQuantity, countValue }: Props) {
  return (
    <Alert variant="warning">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <HiExclamationTriangle className="-mt-1" size={"21"} />
          <strong>
            This stock has already been counted (Variance detected)
          </strong>
        </div>
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
      </div>
    </Alert>
  );
}

export function NeutralAlert() {
  return (
    <Alert variant="neutral">
      <div className="flex items-center gap-3">
        <HiChevronDoubleRight className="-mt-1" size={"18"} />
        <strong>This stock has been skipped</strong>
      </div>
    </Alert>
  );
}
