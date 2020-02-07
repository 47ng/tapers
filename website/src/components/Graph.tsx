import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import { ResponsiveLine } from '@nivo/line'

export interface GraphProps {
  points: {
    x: number
    y: number
  }[]
}

const Graph: React.FC<GraphProps> = ({ points, ...props }) => {
  const data = React.useMemo(() => {
    return [
      {
        id: 'foo',
        data: points
      }
    ]
  }, [points])
  const { minY, maxY } = React.useMemo(() => {
    return points
      .map(({ y }) => y)
      .reduce(
        ({ minY, maxY }, y) => {
          return {
            minY: Math.min(minY, y),
            maxY: Math.max(maxY, y)
          }
        },
        { minY: Infinity, maxY: -Infinity }
      )
  }, [points])
  return (
    <Box {...props} height={[250, 320, 400]}>
      {typeof window === 'undefined' ? (
        <Flex
          bg="gray.100"
          h="100%"
          w="100%"
          borderRadius={4}
          justifyContent="center"
          alignItems="center"
          fontSize="sm"
          color="gray.600"
        >
          Loading graph...
        </Flex>
      ) : (
        <ResponsiveLine
          animate={false}
          useMesh
          colors={{ scheme: 'category10' }}
          margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
          data={data}
          xScale={{
            type: 'linear',
            min: 0,
            max: 1
          }}
          yScale={{
            type: 'linear',
            min: minY,
            max: maxY
          }}
          axisBottom={{
            legend: 'x',
            legendOffset: -12
          }}
          axisLeft={{
            legend: 'y',
            legendOffset: 12
          }}
          markers={[
            {
              axis: 'x',
              value: 0,
              lineStyle: { stroke: '#888', strokeWidth: 1 }
            },
            {
              axis: 'x',
              value: 1,
              lineStyle: { stroke: '#ccd', strokeWidth: 1 }
            },
            {
              axis: 'y',
              value: maxY,
              lineStyle: { stroke: '#ccd', strokeWidth: 1 }
            },
            {
              axis: 'y',
              value: 0,
              lineStyle: { stroke: '#888', strokeWidth: 1 }
            }
          ]}
        />
      )}
    </Box>
  )
}

export default Graph
