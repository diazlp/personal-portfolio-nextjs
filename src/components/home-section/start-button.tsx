import React, { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { HStack, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import { BiSolidRightArrow } from 'react-icons/bi'

const buttonVariants: Variants = {
  initial: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.75,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 3.5,
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.75,
    },
  },
}

const arrowVariants: Variants = {
  initial: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.75,
    },
  },
  enter: {
    opacity: 1,
    x: [0, 10, 0],
    transition: {
      opacity: 1,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
}

export default function StartButton(): React.ReactNode {
  const { t } = useTranslation()

  const startButtonColor = useColorModeValue('purple', 'brand.100')
  const router = useRouter()
  const [routePath, setRoutePath] = useState<string>('')

  return (
    <AnimatePresence mode="wait" initial>
      <HStack
        as={motion.div}
        key={routePath}
        color={startButtonColor}
        position="fixed"
        alignSelf="flex-end"
        bottom={10}
        cursor="pointer"
        userSelect="none"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={buttonVariants}
        onClick={() => {
          setRoutePath('/project')
          router.push('/project')
        }}
      >
        <Heading fontSize={{ base: 'medium', md: 'large' }} fontWeight="normal">
          {t('nav-start')}
        </Heading>
        <Box
          as={motion.div}
          key={routePath}
          color={startButtonColor}
          initial="initial"
          animate="enter"
          variants={arrowVariants}
        >
          <BiSolidRightArrow />
        </Box>
      </HStack>
    </AnimatePresence>
  )
}
