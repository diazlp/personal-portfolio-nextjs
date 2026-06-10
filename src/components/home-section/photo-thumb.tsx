'use client'

import React from 'react'
import Image from 'next/image'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { Box, useColorModeValue } from '@chakra-ui/react'

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    rotateY: 90,
    transition: {
      duration: 0.75,
    },
  },
  enter: {
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: 3,
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    rotateY: 135,
    transition: {
      duration: 0.75,
    },
  },
}

export default function PhotoThumb(): React.ReactNode {
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <AnimatePresence mode="wait" initial>
      <Box
        as={motion.div}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={imageVariants}
        position="relative"
        w={{ md: 'min(28vw, 340px)', lg: '340px' }}
        minW={{ md: '260px', lg: '340px' }}
        aspectRatio="1"
        overflow="hidden"
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="0 32px 90px rgba(0, 0, 0, 0.36)"
        sx={{
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/assets/images/diazlp-photo-tone.png"
          fill
          alt="Diaz Linggaputra Photo"
          className="select-none"
          sizes="(min-width: 768px) 340px, 64px"
          style={{
            objectFit: 'cover',
            objectPosition: '50% 35%',
          }}
          priority={true}
        />
      </Box>
    </AnimatePresence>
  )
}
