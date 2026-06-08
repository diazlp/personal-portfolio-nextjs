import React from 'react'
import { HStack, Link, useColorModeValue } from '@chakra-ui/react'
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaInstagram,
  FaQuora,
  FaStackOverflow,
  // FaMedium,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  GITHUB_LINK,
  GITLAB_LINK,
  LINKEDIN_LINK,
  EMAIL_LINK,
  INSTAGRAM_LINK,
  QUORA_LINK,
  STACKOVERFLOW_LINK,
  // MEDIUM_LINK,
  WHATSAPP_LINK,
} from '@/utils/constants'

export default function SocialProfile(): React.ReactNode {
  const socialLinkColor = useColorModeValue('green', 'brand.100')

  return (
    <HStack gap={5} fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}>
      <Link
        href={GITHUB_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaGithub />
      </Link>
      <Link
        href={LINKEDIN_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaLinkedin />
      </Link>
      <Link
        href={INSTAGRAM_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaInstagram />
      </Link>
      <Link
        href={EMAIL_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <MdEmail />
      </Link>
      <Link
        href={QUORA_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaQuora />
      </Link>
      <Link
        href={STACKOVERFLOW_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaStackOverflow />
      </Link>
      {/* <Link
        href={MEDIUM_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaMedium />
      </Link> */}
      <Link
        href={GITLAB_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaGitlab />
      </Link>
      <Link
        href={WHATSAPP_LINK}
        isExternal
        _hover={{
          transform: 'scale(1.2)',
          color: socialLinkColor,
        }}
      >
        <FaWhatsapp />
      </Link>
    </HStack>
  )
}
