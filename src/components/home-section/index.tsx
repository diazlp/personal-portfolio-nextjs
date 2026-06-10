import React from 'react'
import { Variants, motion } from 'framer-motion'
import { Container, Stack, HStack } from '@chakra-ui/react'
import CoreInformationComponent from './core-info'
import PhotoThumb from './photo-thumb'
import StartButton from './start-button'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 40,
    transition: { duration: 1, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 1, type: 'easeOut' },
  },
}

export default function HomeSection(): React.ReactNode {
  return (
    <Container
      as={motion.div}
      display="flex"
      position="relative"
      zIndex={1}
      maxW="container.lg"
      maxH={{ base: 'auto', md: '100vh' }}
      px={{ base: 4, lg: 8 }}
      initial={false}
      animate="enter"
      exit="exit"
      variants={variants}
      centerContent
    >
      <Stack
        spacing={4}
        py={12}
        align="center"
        justify="center"
        h="100vh"
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
