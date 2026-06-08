import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function TooltipProfile(): React.ReactNode {
  const { t } = useTranslation()

  return (
    <VStack gap={3}>
      <Text align="justify" lineHeight="18px">
        {t('tooltip-profile-1')}
      </Text>

      <Text align="justify" lineHeight="18px">
        {t('tooltip-profile-2')}
      </Text>
    </VStack>
  )
}
