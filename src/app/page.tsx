'use client'

import { useTopCoins } from '../modules/coin/hooks/useTopCoins'
import { useMemo, useState } from 'react'
import { useDebounce } from '../shared/hooks/useDebounce'
import { highlightSearchTerm } from '../shared/utils/highlightSearchTerm'
import Link from 'next/link'

export default function Home() {
  const { data, isLoading, isError } = useTopCoins()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const filteredCoins = useMemo(() => {
    if (!data) return []
    return data.filter((coin) =>
      `${coin.name} ${coin.symbol}`.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
  }, [data, debouncedSearch])

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-400 animate-pulse">Carregando moedas...</p>
      </div>
    )

  if (isError)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-400">Erro ao carregar moedas. Tente novamente.</p>
      </div>
    )

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top 20 Moedas por Market Cap</h1>

      <input
        type="text"
        aria-label="Buscar moeda"
        placeholder="Buscar moeda..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md p-2 border border-gray-600 rounded bg-search"
      />

      {filteredCoins.length === 0 ? (
        <p className="text-gray-400">Nenhuma moeda encontrada.</p>
      ) : (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCoins.map((coin) => (
            <li
              key={coin.id}
              data-testid="coin-card"
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <Link
                href={`/coin/${coin.id}`}
                className="flex items-center gap-4"
              >
                <img src={coin.image} alt={`Logo da moeda ${coin.name}`} className="w-8 h-8" />
                <div>
                  <p className="font-semibold">
                    {highlightSearchTerm(
                      `${coin.name} (${coin.symbol.toUpperCase()})`,
                      debouncedSearch
                    )}
                  </p>
                  <p>{formatPrice(coin.current_price)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
