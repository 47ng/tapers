import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/primitives/Body'
import Nav from '../components/Nav'
import { Stack, Heading, Box } from '@chakra-ui/core'
import LinearTaper from '../components/tapers/LinearTaper'
import SCurveTaper from '../components/tapers/SCurveTaper'
import PiecewiseLinearTaper from '../components/tapers/PiecewiseLinearTaper'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Tapers</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Body shade={300} />
    <Header />
    <Nav />
    <Stack maxW="xl" mx="auto" spacing={16} p={2}>
      <Box>
        <Heading as="h3" fontSize="xl" mb={2}>
          Linear Taper
        </Heading>
        <LinearTaper p={4} bg="white" borderRadius={4} shadow="md" />
      </Box>
      <Box>
        <Heading as="h3" fontSize="xl" mb={2}>
          S-Curve Taper
        </Heading>
        <SCurveTaper p={4} bg="white" borderRadius={4} shadow="md" />
      </Box>
      <Box>
        <Heading as="h3" fontSize="xl" mb={2}>
          Piecewise Linear Taper
        </Heading>
        <PiecewiseLinearTaper p={4} bg="white" borderRadius={4} shadow="md" />
      </Box>
      <Footer />
    </Stack>
  </>
)

export default Home
