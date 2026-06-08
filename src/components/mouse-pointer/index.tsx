'use client'

import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'

const MousePointer: React.FC = () => {
  const gridColor = useColorModeValue(
    'rgba(17, 24, 39, 0.05)',
    'rgba(100, 254, 217, 0.035)',
  )
  const lineColor = useColorModeValue(
    'rgba(17, 24, 39, 0.06)',
    'rgba(246, 189, 96, 0.035)',
  )

  return (
    <div
      className="hidden lg:block fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(${gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${gridColor} 1px, transparent 1px),
          linear-gradient(180deg, transparent 0, transparent 72%, ${lineColor} 72%, transparent 73%)
        `,
        backgroundSize: '56px 56px, 56px 56px, 100% 9px',
        maskImage:
          'linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%)',
      }}
    />
  )
}

export default MousePointer
