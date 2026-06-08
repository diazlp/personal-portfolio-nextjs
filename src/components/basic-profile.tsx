'use client'

import React, { Fragment, useState } from 'react'
import {
  Heading,
  Divider,
  Text,
  Mark,
  useColorModeValue,
  Tag,
  Tooltip,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaQuestionCircle } from 'react-icons/fa'
import SideNavigation from './side-navigation'
import TooltipProfile from './tooltip-profile'

export default function BasicProfile(): React.ReactNode {
  const { t } = useTranslation()

  const profileTextColor = useColorModeValue('black', 'white')
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

  return (
    <Fragment>
      <Heading as="h1" size="2xl" lineHeight={1.08}>
        Diaz Linggaputra
        <Divider />
      </Heading>

      <Text
        color={profileTextColor}
        align="justify"
        fontSize="xl"
        fontWeight="medium"
      >
        Full-stack Developer {t('basic-profile-0')} Tomei Consolidated Bhd
      </Text>

      <Text color="gray.500" align="justify" flexWrap="wrap">
        <Mark color={profileTextColor} fontWeight="bold">
          Software Developer
        </Mark>
        &#8202; at mind, &#8202;
        <Mark color={profileTextColor} fontWeight="bold">
          Entrepreneur
        </Mark>
        &#8202; at heart. <br />
        {t('basic-profile-1')}
        <Tooltip label={<TooltipProfile />} isOpen={isTooltipOpen}>
          <Tag
            bgColor="transparent"
            cursor="pointer"
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          >
            <FaQuestionCircle />
          </Tag>
        </Tooltip>
      </Text>

      <SideNavigation />
    </Fragment>
  )
}
