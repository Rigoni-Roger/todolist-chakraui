import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      background="blue.600"
      minW={"100%"}
      minH={"40px"}
      height="7vh"
    >
      <Heading size={"md"} ml="20px" color="white">
        Profile List Project
      </Heading>
    </Box>
  );
};
