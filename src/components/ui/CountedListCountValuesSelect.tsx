import { Select } from "./Input";

export function CountedListCountValuesSelect() {
  const countVales = [
    { label: "+1", value: 1 },
    { label: "+5", value: 5 },
    { label: "+10", value: 10 },
    { label: "+100", value: 100 },
    { label: "+1000", value: 1000 },
  ];

  return <Select values={countVales} type="number" className="basis-[60%]" />;
}
