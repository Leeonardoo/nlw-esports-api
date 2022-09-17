// 18:00 -> 1070

export function convertHourStringToMinutes(hourString: string): number {
  const [hours, minutes] = hourString.split(":").map(Number)

  return (hours * 60) + minutes
}