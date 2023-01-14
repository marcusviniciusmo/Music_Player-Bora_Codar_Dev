export function ConvertSecondsToMinutes(time: number) {
  const minutes = Math.trunc(time / 60);

  const seconds = time % 60;

  return `${minutes}:${seconds}`;
};