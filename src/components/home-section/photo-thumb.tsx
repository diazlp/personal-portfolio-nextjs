'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

const darkPhoto = '/assets/images/diazlp-photo-tone-sharp.png'
const lightPhoto = '/assets/images/diazlp-photo-light.png'

export default function PhotoThumb(): React.ReactNode {
  const { colorMode } = useColorMode()
  const hasMounted = React.useRef(false)
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const boxShadow = useColorModeValue(
    '0 32px 90px rgba(17, 24, 39, 0.16)',
    '0 32px 90px rgba(0, 0, 0, 0.36)',
  )
  const photoRotation = colorMode === 'light' ? 180 : 0

  React.useEffect(() => {
    hasMounted.current = true
  }, [])

  return (
    <Box
      position="relative"
      w={{ md: 'min(28vw, 340px)', lg: '340px' }}
      minW={{ md: '260px', lg: '340px' }}
      aspectRatio="1"
      sx={{
        perspective: '1200px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: photoRotation }}
        transition={{
          delay: hasMounted.current ? 0 : 3,
          duration: 0.75,
          ease: 'easeInOut',
        }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          boxShadow,
          transformStyle: 'preserve-3d',
        }}
      >
        <PhotoSide
          src={darkPhoto}
          borderColor={borderColor}
          transform="rotateY(0deg)"
        />
        <PhotoSide
          src={lightPhoto}
          borderColor={borderColor}
          transform="rotateY(180deg)"
        />
      </motion.div>
    </Box>
  )
}

function PhotoSide({
  src,
  borderColor,
  transform,
}: {
  src: string
  borderColor: string
  transform: string
}): React.ReactNode {
  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      transform={transform}
      sx={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <Image
        src={src}
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
  )
}
