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
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineFileDownload } from 'react-icons/md'
import { GITHUB_LINK, LINKEDIN_LINK, CV_LINK_INTERNAL } from '@/utils/constants'
import PhotoThumb from './photo-thumb'

export default function CoreInformationComponent(): React.ReactNode {
  const { t } = useTranslation()

  const homeSocialColor = useColorModeValue('green', 'brand.100')
  const headingColor = useColorModeValue('black', 'white')
  const bodyColor = useColorModeValue('blackAlpha.700', 'gray.400')

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
          <PhotoThumb variant="avatar" />
        </Box>
        <Heading
          as="h1"
          color={headingColor}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          lineHeight={1.08}
        >
          Diaz Linggaputra
          <Box as="span" color={homeSocialColor}>
            _
          </Box>
        </Heading>
      </HStack>
      <Divider />

      <Text color={bodyColor} align="justify" maxW="62ch">
        <strong>{t('core-info-1')}</strong> {t('core-info-2')}&#8202;
        <Mark color={headingColor} bg="transparent" fontWeight="bold">
          Software Developer
        </Mark>
        &#8202; {t('core-info-3')}
      </Text>
      <HStack
        spacing={4}
        w="full"
        justify={{ base: 'center', md: 'flex-start' }}
        flexWrap="wrap"
      >
        <Link
          href={LINKEDIN_LINK}
          isExternal
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button colorScheme="brand" variant="ghost" leftIcon={<FaLinkedin />}>
            LinkedIn
          </Button>
        </Link>
        <Link
          href={GITHUB_LINK}
          isExternal
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button colorScheme="brand" variant="ghost" leftIcon={<FaGithub />}>
            Github
          </Button>
        </Link>
        <Link
          as={'a'}
          href={CV_LINK_INTERNAL}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{
            color: homeSocialColor,
          }}
        >
          <Button
            colorScheme="brand"
            variant="ghost"
            leftIcon={<MdOutlineFileDownload />}
          >
            Resume
          </Button>
        </Link>
      </HStack>
    </VStack>
  )
}
