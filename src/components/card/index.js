import { Flex, useDisclosure } from "@chakra-ui/react";

import React from "react";
import CardModal from "./CardModal";

function Card(data) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      onClick={() => {
        onOpen();
      }}
    >
      <Flex my="1" ml="3">
        Name : {data.data.name.fname + " " + data.data.name.lname}
      </Flex>
      <Flex my="1" ml="3">
        Area : {data.data.location.area}
      </Flex>
      <Flex my="1" ml="3">
        Category : {data.data.skills[0].title}
      </Flex>
      <Flex my="1" ml="3">
        Experience : {data.data.skills[0].desc + " Years"}
      </Flex>
      <Flex my="1" ml="3">
        Review :
      </Flex>
      <CardModal
        data={data}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Card;
