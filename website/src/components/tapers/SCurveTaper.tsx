import React from 'react'
import { Stack, Code } from '@chakra-ui/core'
import { SCurveTaper } from 'tapers'
import Graph from '../Graph'
import Control from '../controls/Control'

function useLinearTaper() {
  const [amount, setAmount] = React.useState(0.7)

  const taper = React.useMemo(() => {
    return new SCurveTaper(amount)
  }, [amount])

  const points = React.useMemo(() => {
    return Array(11)
      .fill(undefined)
      .map((_, i, a) => ({
        x: i / (a.length - 1),
        y: taper.map(i / (a.length - 1))
      }))
      .concat([
        { x: 0.45, y: taper.map(0.45) },
        { x: 0.475, y: taper.map(0.475) },
        { x: 0.4875, y: taper.map(0.4875) },
        { x: 0.5125, y: taper.map(0.5125) },
        { x: 0.525, y: taper.map(0.525) },
        { x: 0.55, y: taper.map(0.55) }
      ])
      .sort((a, b) => (a.x < b.x ? 1 : -1))
  }, [taper])

  return { points, amount, setAmount }
}

const SCurveTaperComponent = ({ ...props }) => {
  const { points, amount, setAmount } = useLinearTaper()

  return (
    <Stack spacing={4} {...props}>
      <Graph points={points} />
      <Stack spacing={4} px={4}>
        <Control
          name="Curvature amount"
          min={0}
          max={0.99}
          step={0.01}
          onChange={setAmount}
          value={amount}
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
        {`import { SCurveTaper } from 'tapers'

const taper = new SCurveTaper(${amount})
`}
      </Code>
    </Stack>
  )
}

export default SCurveTaperComponent
