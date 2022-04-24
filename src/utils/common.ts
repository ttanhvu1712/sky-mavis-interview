export function formatCurrencyNumber(
  value: number,
  decimalCount = 0,
  thousands = ","
) {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = value < 0 ? "-" : "";
  let i = value.toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substring(0, j) + thousands : "") +
    i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands)
  );
}
