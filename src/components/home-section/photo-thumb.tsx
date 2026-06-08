'use client'

import React from 'react'
import Image from 'next/image'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    rotateX: 8,
    transition: {
      duration: 0.45,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.65,
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.35,
    },
  },
}

export default function PhotoThumb({
  variant = 'hero',
}: {
  variant?: 'hero' | 'avatar'
}): React.ReactNode {
  const isAvatar = variant === 'avatar'
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const frameBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')
  const labelColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.800')

  return (
    <AnimatePresence mode="wait" initial>
      <Box
        as={motion.div}
        initial={false}
        animate="enter"
        exit="exit"
        variants={imageVariants}
        position="relative"
        w={isAvatar ? '64px' : { md: 'min(34vw, 420px)', lg: '420px' }}
        minW={isAvatar ? '64px' : { md: '320px', lg: '420px' }}
        aspectRatio={isAvatar ? '1' : '1'}
        overflow="hidden"
        borderRadius={isAvatar ? 'full' : 'lg'}
        border="1px solid"
        borderColor={borderColor}
        bg={frameBg}
        boxShadow={isAvatar ? 'none' : '0 32px 90px rgba(0, 0, 0, 0.36)'}
        sx={{
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/assets/images/diazlp-photo.png"
          fill
          alt="Diaz Linggaputra Photo"
          className="select-none"
          sizes={isAvatar ? '64px' : '(min-width: 768px) 420px, 64px'}
          style={{
            objectFit: 'cover',
            objectPosition: isAvatar ? '50% 18%' : '50% 24%',
            filter: isAvatar
              ? 'grayscale(0.35) saturate(0.85) contrast(1.06) brightness(0.72)'
              : 'grayscale(0.45) saturate(0.78) contrast(1.08) brightness(0.7)',
          }}
          priority={true}
        />

        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(145deg, rgba(100, 254, 217, 0.28), rgba(9, 12, 14, 0.16) 45%, rgba(246, 189, 96, 0.18))"
          mixBlendMode="color"
          pointerEvents="none"
        />

        <Box
          position="absolute"
          inset={0}
          bg="repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0, rgba(255, 255, 255, 0.10) 1px, transparent 1px, transparent 7px)"
          opacity={isAvatar ? 0.08 : 0.14}
          pointerEvents="none"
        />

        {!isAvatar && (
          <Box
            position="absolute"
            left={5}
            right={5}
            bottom={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color={labelColor}
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
          >
            <Text>Diaz_LP</Text>
            <Text>Full-stack</Text>
          </Box>
        )}
      </Box>
    </AnimatePresence>
  )
}
