import { Select } from "./Input";

export function CountedListCountValuesSelect() {
  const countVales = [1, 5, 10, 100, 1000];

  return <Select values={countVales} className="basis-[60%]" />;
}
