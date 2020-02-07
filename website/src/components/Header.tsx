import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import GitHubIcon from './icons/GitHub'

const Header = () => {
  return (
    <Flex as="header" justifyContent="space-between" p={4}>
      <Heading as="h1" fontWeight="semibold" fontSize="lg">
        Tapers
      </Heading>
      <a href="https://github.com/47ng/tapers">
        <GitHubIcon
          transition="color 0.2s ease"
          _hover={{
            color: 'gray.800'
          }}
        />
      </a>
    </Flex>
  )
}

export default Header
