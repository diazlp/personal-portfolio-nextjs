import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About | Diaz Linggaputra',
  description: 'Diaz Linggaputra Personal Website Portfolio',
  authors: [{ name: 'Diaz Linggaputra' }],
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return children
}
