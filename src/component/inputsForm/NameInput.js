import { GridItem, Input, Text } from "@chakra-ui/react";

export const NameInput = ({ register }) => {
  return (
    <GridItem>
      <Text fontSize="sm" as="b">
        Enter your name:
      </Text>
      <Input mt="2px" {...register} placeholder="Task name..." />
    </GridItem>
  );
};
