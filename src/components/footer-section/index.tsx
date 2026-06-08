import React from 'react'
import { Box, VStack, useColorModeValue } from '@chakra-ui/react'

export default function FooterSection({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  const footerLineColor = useColorModeValue('black', 'white')

  return (
    <Box
      as="footer"
      position="fixed"
      display={{ base: 'none', xl: 'inline' }}
      bottom={0}
      left={10}
      userSelect="none"
    >
      <VStack
        fontSize="md"
        fontWeight="thin"
        transform="rotate(180deg)"
        gap={5}
        _before={{
          content: '""',
          display: 'block',
          width: '1px',
          height: '90px',
          margin: '0 auto',
          backgroundColor: footerLineColor,
        }}
      >
        {children}
      </VStack>
    </Box>
  )
}
