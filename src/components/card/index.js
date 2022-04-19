import { Flex } from "@chakra-ui/react";
import React from "react";

function Card() {
  return (
    <Flex
      boxShadow="dark-lg"
      borderRadius="10"
      bg="orange.200"
      justify="center"
      m="5"
      h="20vh"
      w="20vw"
      flexDir="column"
      color="black"
    >
      <Flex my="1" ml="3">
        Name :{" "}
      </Flex>
      <Flex my="1" ml="3">
        Job :{" "}
      </Flex>
      <Flex my="1" ml="3">
        Area :{" "}
      </Flex>
      <Flex my="1" ml="3">
        Experience :
      </Flex>
      <Flex justifyContent="center" my="1">
        <Flex border="1px" justifyContent="center" w="10vw" borderRadius="10">
          Contact
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Card;
