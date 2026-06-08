import React, { Fragment } from 'react'
import {
  VStack,
  Text,
  HStack,
  Heading,
  useColorModeValue,
  Tag,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function ExperienceProfile(): React.ReactNode {
  const { t } = useTranslation()

  const experienceTextColor = useColorModeValue('black', 'gray.500')

  return (
    <Fragment>
      {/* Tomei Consolidated Bhd */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <VStack alignSelf="flex-start" align="start" w="30%">
          <Text color={experienceTextColor}>JUL 2022 - PRESENT</Text>
        </VStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">Full-stack Developer</Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Tomei Consolidated Bhd
          </Heading>
          <Text color={experienceTextColor}>{t('experience-profile-1')}</Text>
          <HStack gap={2} flexWrap="wrap">
            {[
              'TypeScript',
              'JavaScript',
              'React',
              'Next.js',
              'React Native',
              'Node.js',
              'NestJS',
              'Socket.IO',
            ].map((item, index) => (
              <Tag
                key={index}
                _light={{
                  color: 'white',
                  bgColor: 'purple',
                }}
                _dark={{
                  color: 'black',
                  bgColor: 'brand.100',
                }}
              >
                {item}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>

      {/* Sanbercode */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <VStack alignSelf="flex-start" align="start" w="30%">
          <Text color={experienceTextColor}>OCT 2021 - APR 2022</Text>
        </VStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">
            Assistant Trainer - Python Data Science
          </Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Sanbercode
          </Heading>
          <Text color={experienceTextColor}>{t('experience-profile-2')}</Text>
          <HStack gap={2} flexWrap="wrap">
            {['Python', 'Pandas', 'Matplotlib', 'NLP'].map((item, index) => (
              <Tag
                key={index}
                _light={{
                  color: 'white',
                  bgColor: 'purple',
                }}
                _dark={{
                  color: 'black',
                  bgColor: 'brand.100',
                }}
              >
                {item}
              </Tag>
            ))}
          </HStack>
        </VStack>
      </HStack>
    </Fragment>
  )
}
