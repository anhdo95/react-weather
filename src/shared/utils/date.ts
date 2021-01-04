export function toVietnameseDateString(date?: Date | string) {
  const value = date ? new Date(date) : new Date()
  return value.toLocaleDateString('vi-VN')
}

export function getShortDayOfWeek(date: number) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date]
}
