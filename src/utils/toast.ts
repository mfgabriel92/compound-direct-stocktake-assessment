import { toast } from "react-toastify";

export function showSuccessToast(message: string): void {
  toast(message, { type: "success" });
}

export function showErrorToast(message: string): void {
  toast(message, { type: "error" });
}
