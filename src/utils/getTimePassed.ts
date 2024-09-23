import dayjs from 'dayjs'

export function getTimePassed(sinceDate: Date) {
  const now = dayjs()
  const pastDate = dayjs(sinceDate)

  const years = now.diff(pastDate, 'year')
  const months = now.diff(pastDate, 'month') % 12
  const days = now.diff(pastDate, 'day') % 30 // Approximate
  const hours = now.diff(pastDate, 'hour') % 24
  const minutes = now.diff(pastDate, 'minute') % 60
  const seconds = now.diff(pastDate, 'second') % 60

  return `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`
}
