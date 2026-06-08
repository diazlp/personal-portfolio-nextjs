import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const variants: Variants = {
  initial: {
    opacity: 1,
    rotateY: 90,
    transition: {
      duration: 0.3,
    },
  },
  enter: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 1,
    rotateY: 135,
    transition: {
      duration: 0.3,
    },
  },
}

export default function ThemeButtonComponent(): React.ReactNode {
  const { toggleColorMode } = useColorMode()

  const themeButtonKey = useColorModeValue('light', 'dark')
  const themeButtonSchemeColor = useColorModeValue('purple', 'orange')
  const themeButtonIcon = useColorModeValue(<SunIcon />, <MoonIcon />)

  return (
    <AnimatePresence mode="wait" initial>
      <IconButton
        as={motion.button}
        aria-label="Theme button mode"
        size="md"
        key={themeButtonKey}
        initial="initial"
        animate="enter"
        exit="exit"
        colorScheme={themeButtonSchemeColor}
        icon={themeButtonIcon}
        variants={variants}
        onClick={toggleColorMode}
      />
    </AnimatePresence>
  )
}
