import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}

export default ThemeToggler
