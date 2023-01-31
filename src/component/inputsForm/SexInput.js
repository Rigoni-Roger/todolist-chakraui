import { GridItem, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

export const SexInput = ({ register, defaultValue }) => {
  return (
    <GridItem>
      <Text fontSize="sm" as="b">
        Select your sex:
      </Text>
      <RadioGroup defaultValue={defaultValue}>
        <Stack direction="row">
          <Radio {...register} value="male">
            Male
          </Radio>
          <Radio {...register} value="female">
            Female
          </Radio>
        </Stack>
      </RadioGroup>
    </GridItem>
  );
};
