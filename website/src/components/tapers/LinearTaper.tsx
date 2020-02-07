import React from 'react'
import { Stack, Code } from '@chakra-ui/core'
import { LinearTaper } from 'tapers'
import Graph from '../Graph'
import Control from '../controls/Control'

function useLinearTaper() {
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(5)

  const taper = React.useMemo(() => {
    return new LinearTaper(min, max)
  }, [min, max])

  const points = React.useMemo(() => {
    return Array(11)
      .fill(undefined)
      .map((_, i, a) => ({
        x: i / (a.length - 1),
        y: taper.map(i / (a.length - 1))
      }))
  }, [taper])

  return { points, min, max, setMin, setMax }
}

const LinearTaperComponent = ({ ...props }) => {
  const { points, min, max, setMin, setMax } = useLinearTaper()

  return (
    <Stack spacing={4} {...props}>
      <Graph points={points} />
      <Stack spacing={4} px={4}>
        <Control
          name="Minimum"
          min={-10}
          max={10}
          step={1}
          onChange={setMin}
          value={min}
        />
        <Control
          name="Maximum"
          min={-10}
          max={10}
          step={1}
          onChange={setMax}
          value={max}
        />
      </Stack>
      <Code
        as="pre"
        p={4}
        bg="gray.800"
        color="gray.300"
        borderRadius={4}
        overflowX="auto"
      >
        {`import { LinearTaper } from 'tapers'

const taper = new LinearTaper(${min}, ${max})
`}
      </Code>
    </Stack>
  )
}

export default LinearTaperComponent
