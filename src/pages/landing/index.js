import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Text w="50px" h="50px" border="2px" gColor="black">
        Write Something
      </Text>
    </Flex>
  );
}

export default Landing;
