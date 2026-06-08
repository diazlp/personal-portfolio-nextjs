'use client'

import React from 'react'
import { Box, VStack, Link, useColorModeValue } from '@chakra-ui/react'
import ProjectSection from '@/components/project-section'
import FooterSection from '@/components/footer-section'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { GITHUB_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from '@/utils/constants'
import { projects } from '@/data/projects'

export default function Project(): React.ReactNode {
  const linkColor = useColorModeValue('green', 'brand.100')

  return (
    <Box>
      <ProjectSection projects={projects} />
      <FooterSection>
        <VStack
          gap={5}
          fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}
          transform="rotate(180deg)"
          color={linkColor}
        >
          <Link
            href={WHATSAPP_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: linkColor,
            }}
          >
            <FaWhatsapp />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: linkColor,
            }}
          >
            <FaLinkedin />
          </Link>
          <Link
            href={GITHUB_LINK}
            isExternal
            _hover={{
              transform: 'scale(1.2)',
              color: linkColor,
            }}
          >
            <FaGithub />
          </Link>
        </VStack>
      </FooterSection>
    </Box>
  )
}
