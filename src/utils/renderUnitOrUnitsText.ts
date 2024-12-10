export function renderUnitOrUnitsText(amount: number) {
  const isZeroOrAbove1 = amount === 0 || amount > 1;
  return isZeroOrAbove1 ? `${amount} units` : `${amount} unit`;
}
