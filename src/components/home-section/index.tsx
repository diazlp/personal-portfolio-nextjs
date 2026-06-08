import React from 'react'
import { Container, Stack, HStack } from '@chakra-ui/react'
import CoreInformationComponent from './core-info'
import PhotoThumb from './photo-thumb'
import StartButton from './start-button'

export default function HomeSection(): React.ReactNode {
  return (
    <Container
      display="flex"
      maxW="container.lg"
      minH="100svh"
      px={{ base: 4, lg: 8 }}
      centerContent
    >
      <Stack
        spacing={{ base: 12, md: 16 }}
        py={{ base: 12, md: 0 }}
        align="center"
        justify="center"
        minH="100svh"
        w="100%"
        direction={{ base: 'column', md: 'row' }}
      >
        <CoreInformationComponent />

        <HStack
          justify="end"
          w={{ base: '100%', md: '50%' }}
          display={{ base: 'none', md: 'flex' }}
        >
          <PhotoThumb />
        </HStack>
      </Stack>
      <StartButton />
    </Container>
  )
}
