import React, { Fragment } from 'react'
import {
  VStack,
  Text,
  HStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaGraduationCap } from 'react-icons/fa'

export default function EducationProfile(): React.ReactNode {
  const { t } = useTranslation()

  const educationTextColor = useColorModeValue('black', 'gray.500')

  return (
    <Fragment>
      {/* Hacktiv8 */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <HStack alignSelf="flex-start" align="center" w="30%">
          <FaGraduationCap />
          <Text color={educationTextColor}>MAY 2022</Text>
        </HStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">Hacktiv8</Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Certificate in FullStack Javascript Immersive
          </Heading>
          <Text color={educationTextColor}>{t('education-profile-1')}</Text>
        </VStack>
      </HStack>

      {/* Bandung Institute of Technology */}
      <HStack
        w="full"
        justify="flex-start"
        gap={4}
        userSelect="none"
        cursor="pointer"
      >
        <HStack alignSelf="flex-start" align="center" w="30%">
          <FaGraduationCap />
          <Text color={educationTextColor}>DEC 2021</Text>
        </HStack>

        <VStack flex="1" align="start">
          <Heading fontSize="medium">{t('education-profile-itb')}</Heading>
          <Heading fontSize="medium" fontWeight="medium">
            Bachelor of Science in Astronomy
          </Heading>
          <Text color={educationTextColor}>{t('education-profile-2')}</Text>
        </VStack>
      </HStack>
    </Fragment>
  )
}
