import React from 'react'
import { Container, Stack, VStack, Spacer } from '@chakra-ui/react'
import { Project } from '@/data/projects'
import BasicProfile from '../basic-profile'
import SkillProfile from './skill-profile'
import MainPortfolio from './main-portfolio'

export default function ProjectSection({
  projects,
}: {
  projects: Project[]
}): React.ReactNode {
  return (
    <Container
      display="flex"
      maxW="full"
      maxH="full"
      px={{ base: 10, md: 20 }}
      centerContent
    >
      <Stack
        position="relative"
        spacing={4}
        py={'20'}
        top={{ base: 0, md: 19 }}
        justify="center"
        alignItems="flex-start"
        fontSize={{ base: 'small', md: 'initial' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align="start"
          position={{ base: 'initial', md: 'sticky' }}
          top={'15vh'}
          w={{ base: '100%', md: '40%' }}
          minH="73vh"
          py={{ base: 20, md: 0 }}
          userSelect="none"
        >
          <BasicProfile />
          <Spacer />
          <SkillProfile />
        </VStack>

        <VStack
          position="relative"
          justify="start"
          align="start"
          px={{ base: 'auto', md: 10 }}
          w={{ base: '100%', md: '50%' }}
          gap={5}
        >
          <MainPortfolio projects={projects} />
        </VStack>
      </Stack>
    </Container>
  )
}
