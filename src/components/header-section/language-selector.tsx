import { availableLanguages } from '@/i18n/settings'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tabs, TabList, Tab, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function HeaderSection(): React.ReactNode {
  const { i18n } = useTranslation()
  const [selectedTab, setSelectedTab] = useState(0)

  const onTabChangeHandler = (index: number) => {
    setSelectedTab(index)
    const language = index === 0 ? 'en' : 'id'
    i18n.changeLanguage(language)
  }

  return (
    <Tabs
      colorScheme={useColorModeValue('purple', 'orange')}
      size="md"
      onChange={onTabChangeHandler}
    >
      <AnimatePresence mode="wait">
        <TabList key={selectedTab}>
          <motion.div
            style={{ position: 'absolute', bottom: 0, width: '50%', zIndex: 1 }}
            initial={{ x: selectedTab === 0 ? '100%' : '0%' }}
            animate={{ x: selectedTab === 0 ? '0%' : '100%' }}
            transition={{ type: 'tween', duration: 0.75 }}
          >
            <motion.div
              style={{
                backgroundColor: useColorModeValue('purple', 'orange'),
                height: '2px',
                width: '100%',
              }}
            />
          </motion.div>
          {availableLanguages.map((lang) => (
            <Tab
              as={motion.button}
              key={lang}
              _selected={{
                backgroundColor: 'transparent',
                color: useColorModeValue('purple', 'orange'),
                transition: { duration: 0.5 },
              }}
            >
              {lang.toUpperCase()}
            </Tab>
          ))}
        </TabList>
      </AnimatePresence>
    </Tabs>
  )
}