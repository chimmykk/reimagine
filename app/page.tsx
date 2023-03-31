"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <main className={inter.className}>
        {/* <Navbar /> */}
        Hello there gorgeous fellow on the internet
      </main>
    </ThemeProvider>
  )
}
