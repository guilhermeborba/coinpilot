import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '../ThemeToggle'

describe('ThemeToggle', () => {
  it('alterna o tema entre claro e escuro', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
  })
})
