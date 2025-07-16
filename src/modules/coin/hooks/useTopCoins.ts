import { useQuery } from '@tanstack/react-query'
import { getTopCoins } from '../../../modules/coin/services/coins'

export function useTopCoins() {
  return useQuery({
    queryKey: ['top-coins'],
    queryFn: getTopCoins,
    staleTime: 1000 * 60 * 5,
  })
}
