import React from 'react'
import { Stack, Heading, Text, Link } from '@chakra-ui/core'

const Header = () => {
  return (
    <Stack isInline as="footer" justifyContent="center" p={4} fontSize="sm">
      <Text>
        Made with ❤️ by{' '}
        <Link fontWeight="semibold" href="https://francoisbest.com">
          François Best
        </Link>
      </Text>
      <Text>-</Text>
      <Link href="https://github.com/47ng/tapers">Edit on GitHub</Link>
    </Stack>
  )
}

export default Header
