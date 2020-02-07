import React from 'react'
import { Stack, Code } from '@chakra-ui/core'
import { PiecewiseLinearTaper } from 'tapers'
import Graph from '../Graph'
import Control from '../controls/Control'

function useLinearTaper() {
  const [points, setPoints] = React.useState([2, 7, 9, 18])

  const taper = React.useMemo(() => {
    return new PiecewiseLinearTaper(points)
  }, [points])

  const dataPoints = React.useMemo(() => {
    return Array(101)
      .fill(undefined)
      .map((_, i, a) => ({
        x: i / (a.length - 1),
        y: taper.map(i / (a.length - 1))
      }))
  }, [taper])

  return { points, dataPoints, setPoints }
}

const LinearTaperComponent = ({ ...props }) => {
  const { points, dataPoints, setPoints } = useLinearTaper()

  return (
    <Stack spacing={4} {...props}>
      <Graph points={dataPoints} />
      <Stack spacing={4} px={4}>
        {points.map((point, index) => (
          <Control
            key={index}
            min={0}
            max={20}
            step={1}
            value={point}
            onChange={value => {
              const newPoints = [...points]
              newPoints[index] = value
              setPoints(newPoints)
            }}
          />
        ))}
      </Stack>
      <Code
        as="pre"
        p={4}
        bg="gray.800"
        color="gray.300"
        borderRadius={4}
        overflowX="auto"
      >
        {`import { PiecewiseLinearTaper } from 'tapers'

const taper = new PiecewiseLinearTaper([${points.join(', ')}])
`}
      </Code>
    </Stack>
  )
}

export default LinearTaperComponent
