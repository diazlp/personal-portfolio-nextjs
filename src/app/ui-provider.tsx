'use client'

import React from 'react'
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
  // ColorModeScript,
  theme as base,
} from '@chakra-ui/react'
import '@fontsource/roboto-mono'
import { CSSObject } from '@emotion/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#dffdf5',
    100: '#64fed9',
    200: '#35c8af',
    900: '#07100e',
  },
  ember: {
    100: '#f6bd60',
    200: '#d8893d',
  },
  ink: {
    900: '#0b0d10',
    800: '#101418',
    700: '#171d22',
  },
}

const fonts = {
  heading: `Roboto Mono, ${base.fonts.heading}`,
  body: base.fonts.body,
}

const theme = extendTheme({
  styles: {
    global: (props: CSSObject) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0b0d10' : '#f7f8fb',
        color: props.colorMode === 'dark' ? '#edf2f7' : '#111827',
      },
    }),
  },
  colors,
  config,
  fonts,
})

export default function UIProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      {children}
    </ChakraProvider>
  )
}
