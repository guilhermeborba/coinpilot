'use client'

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error)

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Erro ao carregar os dados da moeda</h2>
      <p className="text-gray-400">Tente novamente mais tarde.</p>
    </div>
  )
}
