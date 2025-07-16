export function highlightSearchTerm(text: string, term: string) {
  if (!term) return text

  const regex = new RegExp(`(${term})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-300 text-black rounded px-1">
        {part}
      </mark>
    ) : (
      part
    )
  )
}
