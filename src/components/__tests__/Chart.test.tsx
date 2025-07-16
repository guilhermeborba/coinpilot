import { render } from '@testing-library/react'
import Chart from '../../modules/coin/components/Chart'

describe('Chart', () => {
  it('deve renderizar o componente sem lançar erro', () => {
    const mockData = [
      { date: '01/07', price: 123.45 },
      { date: '02/07', price: 234.56 },
    ]

    expect(() => render(<Chart data={mockData} />)).not.toThrow()
  })
})
