import { formatDistanceToNow as formatDistanceToNowDateFns } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDistanceFromNow(date: Date) {
  return formatDistanceToNowDateFns(date, {
    locale: ptBR,
    addSuffix: true,
  })
}
