export function toVietnameseDateString(date?: Date | string) {
  const value = date ? new Date(date) : new Date()
  return value.toLocaleDateString('vi-VN')
}