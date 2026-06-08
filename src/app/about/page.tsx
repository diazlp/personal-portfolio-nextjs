'use client'

import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import AboutSection from '@/components/about-section'
import FooterSection from '@/components/footer-section'

export default function About(): React.ReactNode {
  return (
    <Box>
      <AboutSection />
      <FooterSection>
        <Text sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
          <Text
            as="span"
            _light={{
              color: 'green',
            }}
            _dark={{
              color: 'brand.100',
            }}
          >
            diazlinggaputra@gmail.com
          </Text>
        </Text>
      </FooterSection>
    </Box>
  )
}
