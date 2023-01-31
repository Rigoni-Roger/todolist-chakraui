import {
  Box,
  GridItem,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

export const AgeInput = ({ value, register, onChange, min, max }) => {
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const med = (max - min) / 2 + min;

  return (
    <GridItem>
      <Text fontSize="sm" as="b">
        Select your age:
      </Text>
      <Box mt="5px" pt={6} pb={2}>
        <Slider
          value={value}
          min={16}
          max={90}
          step={1}
          {...register}
          onChange={(data) => onChange(data)}
        >
          <SliderMark value={min} {...labelStyles}>
            {min}
          </SliderMark>
          <SliderMark value={med} {...labelStyles}>
            {med}
          </SliderMark>
          <SliderMark value={max} {...labelStyles}>
            {max}
          </SliderMark>
          <SliderMark
            value={value}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {value}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </GridItem>
  );
};
