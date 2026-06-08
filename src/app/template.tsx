'use client'
import React from 'react'

export default function Template({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return <main>{children}</main>
}
