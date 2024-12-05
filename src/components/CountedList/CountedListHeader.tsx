function CountedListHeader() {
  return (
    <thead>
      <tr className="text-normal h-12 border-b-[1px] border-gray-200 text-sm text-gray-500">
        <th className="text-start font-normal">STOCK NAME</th>
        <th className="text-start font-normal">PREVIOUS QTY</th>
        <th className="text-start font-normal">COUNT</th>
        <th className="text-start font-normal">MOVEMENT</th>
        <th className="text-start font-normal">STATUS</th>
        <th></th>
      </tr>
    </thead>
  );
}

export { CountedListHeader };
