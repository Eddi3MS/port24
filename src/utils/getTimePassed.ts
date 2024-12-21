import dayjs from 'dayjs'

export function getTimePassed() {
  const pastDate = dayjs('07/03/2022 9:00', 'MM/DD/YYYY HH:mm')
  const now = dayjs()

  const years = now.diff(pastDate, 'year')
  const months = now.diff(pastDate, 'month') % 12
  const days = now.diff(pastDate, 'day') % 30 // Approximate
  const hours = now.diff(pastDate, 'hour') % 24
  const minutes = now.diff(pastDate, 'minute') % 60

  return `${years} ano${years > 1 ? 's' : ''}, ${months} mese${
    months > 1 ? 's' : ''
  }, ${days} dia${days > 1 ? 's' : ''}, ${hours} hora${
    hours > 1 ? 's' : ''
  } e ${minutes} minuto${minutes > 1 ? 's' : ''}`
}
