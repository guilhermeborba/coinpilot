import { axiosClient } from '../../../services/axiosClient'

export interface Coin { /* ...mesmo código... */ }
export interface CoinDetail { /* ...mesmo código... */ }
export interface MarketChart {
  prices: [number, number][]
}

export async function getMarketChart(id: string, days = 7): Promise<MarketChart> {
  try {
    const { data } = await axiosClient.get<MarketChart>(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days,
      },
    })
    return data
  } catch (error) {
    console.error(`Erro ao buscar gráfico de mercado da moeda ${id}:`, error)
    throw new Error('Erro ao buscar gráfico de mercado.')
  }
}

export async function getCoinById(id: string): Promise<CoinDetail> {
  try {
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
  } catch (error) {
    console.error(`Erro ao buscar dados da moeda ${id}:`, error)
    throw new Error('Erro ao buscar dados da moeda.')
  }
}

export async function getTopCoins(): Promise<Coin[]> {
  try {
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
  } catch (error) {
    console.error('Erro ao buscar moedas em destaque:', error)
    throw new Error('Erro ao buscar moedas em destaque.')
  }
}
