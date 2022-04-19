import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      w="100%"
      h="15vh"
      bg="black"
      justify="center"
      align="center"
      color="white"
    >
      <Text fontSize="4xl" as="em">
        &copy; Easy HandyMan
      </Text>
    </Flex>
  );
}

export default Footer;
