import { Flex } from "@chakra-ui/react";
import React from "react";

function Card(data) {
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
        Name : {data.data.name.fname + " " + data.data.name.lname}
      </Flex>
      <Flex my="1" ml="3">
        Area : {data.data.location.area}
      </Flex>
      <Flex my="1" ml="3">
        Job : {data.data.skills[1].title}
      </Flex>
      <Flex my="1" ml="3">
        Experience : {data.data.skills[1].desc}
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
