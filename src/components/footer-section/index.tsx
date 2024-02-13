import React from 'react'
import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react'

export default function FooterSection({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <Box
      as="footer"
      position="fixed"
      display={{ base: 'none', md: 'inline' }}
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
          backgroundColor: useColorModeValue('black', 'white'),
        }}
      >
        <Text sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
          <Text as="span" color={useColorModeValue('green', 'brand.100')}>
            {children}
          </Text>
        </Text>
      </VStack>
    </Box>
  )
}