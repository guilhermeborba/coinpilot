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

export interface CoinDetail {
  id: string
  symbol: string
  name: string
  description: {
    en: string
  }
  image: {
    large: string
  }
  market_data: {
    current_price: {
      usd: number
    }
    market_cap: {
      usd: number
    }
    price_change_percentage_24h: number
  }
}

export interface MarketChart {
  prices: [number, number][]
}

export async function getMarketChart(id: string, days = 7): Promise<MarketChart> {
  const { data } = await axiosClient.get<MarketChart>(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days,
    },
  });
  return data;
}

export async function getCoinById(id: string): Promise<CoinDetail> {
  const { data } = await axiosClient.get<CoinDetail>(`/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  })
  return data
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
