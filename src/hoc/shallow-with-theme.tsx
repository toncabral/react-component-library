import React from 'react'
import renderer from 'react-test-renderer'

import theme from '../theme/project1/theme'
import ThemeProvider from '../theme/theme-provider'

export default function renderWithTheme(component: JSX.Element) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )
}