import React from 'react'
import { Box, HStack, Tooltip } from '@chakra-ui/react'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'

export default function SkillProfile(): React.ReactNode {
  return (
    <HStack gap={5} fontSize={{ base: 'initial', md: 'large', xl: 'x-large' }}>
      <Tooltip label="JavaScript">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'yellow',
          }}
        >
          <IoLogoJavascript size={23} />
        </Box>
      </Tooltip>

      <Tooltip label="TypeScript">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.500',
          }}
        >
          <BiLogoTypescript size={25} />
        </Box>
      </Tooltip>

      <Tooltip label="React">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.200',
          }}
        >
          <IoLogoReact />
        </Box>
      </Tooltip>

      <Tooltip label="Next.js">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'white',
          }}
        >
          <TbBrandNextjs />
        </Box>
      </Tooltip>

      <Tooltip label="Node.js">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'green.400',
          }}
        >
          <FaNodeJs />
        </Box>
      </Tooltip>

      <Tooltip label="MongoDB">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'green.200',
          }}
        >
          <SiMongodb />
        </Box>
      </Tooltip>

      <Tooltip label="PostgreSQL">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.700',
          }}
        >
          <BiLogoPostgresql />
        </Box>
      </Tooltip>

      <Tooltip label="TailwindCSS">
        <Box
          as="span"
          _hover={{
            transform: 'scale(1.2)',
            color: 'blue.300',
          }}
        >
          <SiTailwindcss />
        </Box>
      </Tooltip>
    </HStack>
  )
}
