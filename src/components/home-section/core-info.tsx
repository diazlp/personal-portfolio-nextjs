import React from 'react'
import {
  VStack,
  HStack,
  Box,
  Heading,
  Divider,
  Text,
  Link,
  Button,
  Mark,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ReactTyped } from 'react-typed'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import { GITHUB_LINK, LINKEDIN_LINK, CV_LINK_INTERNAL } from '@/utils/constants'
import Image from 'next/image'

export default function CoreInformationComponent(): React.ReactNode {
  const { t } = useTranslation()

  const homeSocialColor = useColorModeValue('green', 'brand.100')
  const bodyColor = useColorModeValue('blackAlpha.700', 'gray.400')
  const mobilePhotoSrc = useColorModeValue(
    '/assets/images/diazlp-photo-light.png',
    '/assets/images/diazlp-photo-tone-sharp.png',
  )

  return (
    <VStack
      spacing={4}
      align="start"
      w={{ base: '100%', md: '50%' }}
      py={{ base: 20, md: 0 }}
      userSelect="none"
    >
      <HStack gap={5} align="center">
        <Box as="div" display={{ base: 'flex', md: 'none' }}>
          <Image
            src={mobilePhotoSrc}
            width={60}
            height={60}
            alt="Diaz Linggaputra Photo"
            className="select-none"
            style={{ width: 'auto', height: 'auto', borderRadius: '9999px' }}
            loading="lazy"
          />
        </Box>
        <Heading as="h1">
          <ReactTyped
            startWhenVisible
            strings={['Diaz Linggaputra']}
            typeSpeed={70}
            startDelay={1000}
            cursorChar="_"
          />
        </Heading>
      </HStack>
      <Divider />

      <Text color={bodyColor} align="justify" maxW="62ch">
        <strong>{t('core-info-1')}</strong> {t('core-info-2')}&#8202;
        <Mark bg="transparent" fontWeight="bold" color="inherit">
          Software Developer
        </Mark>
        &#8202; {t('core-info-3')}
      </Text>
      <HStack
        gap={{ base: 1, sm: 2, md: 4 }}
        w="full"
        justify={{ base: 'center', md: 'flex-start' }}
        flexWrap="nowrap"
      >
        <Link
          href={LINKEDIN_LINK}
          isExternal
          flexShrink={1}
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button
            colorScheme="brand"
            variant="ghost"
            leftIcon={<FaLinkedin />}
            size={{ base: 'xs', sm: 'sm', md: 'md' }}
            px={{ base: 2, sm: 3, md: 4 }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            whiteSpace="nowrap"
          >
            LinkedIn
          </Button>
        </Link>
        <Link
          href={GITHUB_LINK}
          isExternal
          flexShrink={1}
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button
            colorScheme="brand"
            variant="ghost"
            leftIcon={<FaGithub />}
            size={{ base: 'xs', sm: 'sm', md: 'md' }}
            px={{ base: 2, sm: 3, md: 4 }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            whiteSpace="nowrap"
          >
            Github
          </Button>
        </Link>
        <Link
          as={'a'}
          href={CV_LINK_INTERNAL}
          target="_blank"
          rel="noopener noreferrer"
          flexShrink={1}
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button
            colorScheme="brand"
            variant="ghost"
            leftIcon={<MdOutlineFileDownload />}
            size={{ base: 'xs', sm: 'sm', md: 'md' }}
            px={{ base: 2, sm: 3, md: 4 }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            whiteSpace="nowrap"
          >
            Resume
          </Button>
        </Link>
      </HStack>
    </VStack>
  )
}
