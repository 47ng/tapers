import React from 'react'
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps,
  Text
} from '@chakra-ui/core'

export interface ControlProps extends SliderProps {
  name?: string
}

const Control: React.FC<ControlProps> = ({
  name,
  min,
  max,
  defaultValue = 0,
  mb,
  value,
  onChange,
  ...props
}) => {
  return (
    <Box mb={mb}>
      {name && (
        <Text fontWeight="medium" color="gray.600" fontSize="sm">
          {name}
        </Text>
      )}
      <Slider
        flex="1"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        {...props}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb
          fontSize="sm"
          width="32px"
          height="20px"
          children={value}
        />
      </Slider>
    </Box>
  )
}

export default Control
