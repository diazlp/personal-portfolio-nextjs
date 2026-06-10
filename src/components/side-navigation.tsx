'use client'

import React, { useState } from 'react'
import { Heading, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const flexVariants: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      staggerChildren: 1,
    },
  },
}

const itemVariants: Variants = {
  initial: { x: '-100%', opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
}

export default function SideNavigation(): React.ReactNode {
  const { t } = useTranslation()

  const pathname = usePathname()
  const router = useRouter()
  const [routePath, setRoutePath] = useState<string>(pathname)

  const routes: {
    path: string
    text: string
  }[] = [
    { path: '/', text: `01 ${t('custom-nav-home')}` },
    { path: '/project', text: `02 ${t('custom-nav-project')}` },
    { path: '/about', text: `03 ${t('custom-nav-about')}` },
    // { path: '/contact', text: `04 ${t('custom-nav-contact')}` },
  ]

  return (
    <AnimatePresence mode="wait" initial>
      <Flex
        as={motion.div}
        direction="column"
        marginTop={10}
        gap={3}
        letterSpacing={0}
        cursor="pointer"
        userSelect="none"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={flexVariants}
        key={routePath}
      >
        {routes.map((route, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: pathname !== route.path ? 15 : 0,
              transition: {
                type: 'tween',
              },
            }}
            whileTap={{
              opacity: pathname !== route.path ? 0 : 1,
              x: pathname !== route.path ? 50 : 0,
              transition: {
                type: 'tween',
              },
            }}
            variants={itemVariants}
            onClick={() => {
              setRoutePath(route.path)
              router.push(route.path)
            }}
          >
            <Heading
              fontWeight="normal"
              fontSize="medium"
              _light={{
                color: pathname === route.path ? 'purple' : '',
                _hover: {
                  color: pathname !== route.path ? 'green' : '',
                },
              }}
              _dark={{
                color: pathname === route.path ? 'orange' : '',
                _hover: {
                  color: pathname !== route.path ? 'brand.100' : '',
                },
              }}
            >
              {route.text}
            </Heading>
          </motion.div>
        ))}
      </Flex>
    </AnimatePresence>
  )
}
