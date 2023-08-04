import dayjs, { Dayjs } from "dayjs";
import duration, { Duration } from "dayjs/plugin/duration";
dayjs.extend(duration);

export default function calculateTimeDiff(time: Dayjs): string {
  const timeDiffDuration: Duration = dayjs.duration(dayjs().diff(time));
  const yearDiff = Number(timeDiffDuration.format("Y"));
  const monthDiff = Number(timeDiffDuration.format("M"));
  const dataDiff = Number(timeDiffDuration.format("D"));
  const hourDiff = Number(timeDiffDuration.format("H"));
  const minuteDiff = Number(timeDiffDuration.format("m"));
  const secondDiff = Number(timeDiffDuration.format("s"));

  if (yearDiff > 0) {
    return yearDiff === 1 //
      ? `${yearDiff} year ago`
      : `${yearDiff} years ago`;
  } //
  else if (monthDiff > 0) {
    return monthDiff === 1
      ? `${monthDiff} month ago`
      : `${monthDiff} months ago`;
  } //
  else if (dataDiff > 0) {
    return dataDiff === 1 //
      ? `${dataDiff} day ago`
      : `${dataDiff} days ago`;
  } //
  else if (hourDiff > 0) {
    return hourDiff === 1 //
      ? `${hourDiff} hour ago`
      : `${hourDiff} hours ago`;
  } //
  else if (minuteDiff > 0) {
    return minuteDiff === 1
      ? `${minuteDiff} minute ago`
      : `${minuteDiff} minutes ago`;
  } //
  else if (secondDiff > 0) {
    return secondDiff === 1
      ? `${secondDiff} second ago`
      : `${secondDiff} seconds ago`;
  } //
  else {
    return "";
  }
}
