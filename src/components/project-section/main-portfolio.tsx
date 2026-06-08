import React, { Fragment } from 'react'
import Image from 'next/image'
import {
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  Link,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import { Project } from '@/data/projects'

export default function MainPortfolio({ projects }: { projects: Project[] }) {
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const mutedTextColor = useColorModeValue('blackAlpha.700', 'gray.400')
  const quietTextColor = useColorModeValue('blackAlpha.600', 'gray.500')
  const accentColor = useColorModeValue('purple.600', 'brand.100')
  const hoverBgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <Fragment>
      <VStack
        w="full"
        gap={0}
        className="group/list"
        minW={{ md: '42vw' }}
        align="stretch"
      >
        {projects.map((project: Project, i) => {
          return (
            <Link
              href={project.link}
              isExternal
              key={i}
              w="full"
              style={{
                textDecoration: 'none',
              }}
              borderTop="1px solid"
              borderColor={borderColor}
              _last={{
                borderBottom: '1px solid',
                borderColor,
              }}
            >
              <HStack
                w="full"
                align="stretch"
                justify="space-between"
                gap={{ base: 4, md: 6 }}
                py={{ base: 6, md: 7 }}
                px={{ base: 0, md: 3 }}
                userSelect="none"
                cursor="pointer"
                transition="background-color 0.2s ease, transform 0.2s ease"
                className="lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                _hover={{
                  bg: hoverBgColor,
                  transform: { md: 'translateX(8px)' },
                }}
                flexDirection={{ base: 'column', sm: 'row' }}
              >
                <Box
                  alignSelf="flex-start"
                  w={{ base: '100%', sm: '34%' }}
                  minW={{ sm: '150px' }}
                  aspectRatio="16 / 10"
                  overflow="hidden"
                  borderRadius="md"
                  border="1px solid"
                  borderColor={borderColor}
                  bg="blackAlpha.300"
                >
                  <Image
                    src={project.cover}
                    loading="lazy"
                    width={420}
                    height={260}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                <VStack flex="1" align="start" spacing={3}>
                  <HStack w="full" justify="space-between">
                    <Text
                      color={accentColor}
                      fontSize="xs"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      {project.kind}
                    </Text>
                    <Text color={quietTextColor} fontSize="xs">
                      {String(i + 1).padStart(2, '0')}
                    </Text>
                  </HStack>

                  <VStack align="start" spacing={1}>
                    <Heading fontSize={{ base: 'lg', md: 'xl' }}>
                      {project.title}
                    </Heading>
                    <Heading
                      color={mutedTextColor}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {project.summary}
                    </Heading>
                  </VStack>

                  <Text color={mutedTextColor}>{project.description}</Text>
                  <HStack gap={2} flexWrap="wrap">
                    {project.tags.map((item, index) => (
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
                        borderRadius="base"
                      >
                        {item}
                      </Tag>
                    ))}
                  </HStack>
                </VStack>
              </HStack>
            </Link>
          )
        })}
      </VStack>
    </Fragment>
  )
}
