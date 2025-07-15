import { axiosClient } from './axiosClient'

export interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  price_change_percentage_24h: number
}

export async function getTopCoins(): Promise<Coin[]> {
    const { data } = await axiosClient.get<Coin[]>('/coins/markets', {
    params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        price_change_percentage: '24h',
    },
    })
  return data
}
