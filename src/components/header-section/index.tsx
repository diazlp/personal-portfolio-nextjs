'use client'

import React, { Fragment } from 'react'
import { HStack, Flex } from '@chakra-ui/react'
import ThemeButtonComponent from './theme-button'
import LanguageSelectorComponent from './language-selector'
import MousePointer from '@/components/mouse-pointer'

export default function HeaderSection(): React.ReactNode {
  return (
    <Fragment>
      <HStack
        as="header"
        position="fixed"
        top="0"
        px={8}
        py={6}
        zIndex="tooltip"
        justify="space-between"
        align="center"
        alignItems="center"
        w="100%"
        backdropFilter="blur(3px)"
      >
        <ThemeButtonComponent />

        <Flex as="div" align="center" justify="space-between" gap={5}>
          <LanguageSelectorComponent />
        </Flex>
      </HStack>
      <MousePointer />
    </Fragment>
  )
}
