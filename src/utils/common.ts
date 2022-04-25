export function formatCurrencyNumber(
  value: number,
  punctuation = ","
) {
  const roundedValue = Math.floor(value)
  const negativeSign = roundedValue < 0 ? "-" : "";
  let i = roundedValue.toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substring(0, j) + punctuation : "") +
    i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + punctuation)
  );
}
