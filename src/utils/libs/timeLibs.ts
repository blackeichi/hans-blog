function padTwoDigits(num: number) {
  return num.toString().padStart(2, "0");
}

export function getFormattedDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTwoDigits(date.getMonth() + 1),
      padTwoDigits(date.getDate()),
    ].join(".") +
    " " +
    [padTwoDigits(date.getHours()), padTwoDigits(date.getMinutes())].join(":")
  );
}
