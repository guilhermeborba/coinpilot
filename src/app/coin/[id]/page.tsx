import Link from 'next/link'
import { notFound } from 'next/navigation'
import Chart from '@/components/Chart'
import { getCoinById, getMarketChart } from '@/services/coins'

type CoinDetailPageProps = {
  params: {
    id: string
  }
}

export default async function CoinDetailPage({ params }: { params: { id: string } }) {
  const { id: coinId } = await Promise.resolve(params)

  try {
    const coin = await getCoinById(coinId)
    if (!coin) return notFound()

    const chartResponse = await getMarketChart(coinId, 7)
    const chartData = chartResponse.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
      price: Number(price.toFixed(2)),
    }))

    return (
      <div className="p-6">
        <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
          ← Voltar para a Home
        </Link>

        <h1 className="text-2xl font-bold mb-4">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h1>

        <p className="text-gray-500">
          Preço atual: ${coin.market_data?.current_price?.usd?.toLocaleString() ?? 'Indisponível'}
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Histórico (7 dias)</h2>
          <Chart data={chartData} />
        </section>

        {coin.description?.en && (
          <section className="mt-6 prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-2">Sobre o {coin.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: coin.description.en }} />
          </section>
        )}
      </div>
    )
  } catch (error) {
    console.error('Erro ao carregar dados da moeda:', error)
    return notFound()
  }
}
