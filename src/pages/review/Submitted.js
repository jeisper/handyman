import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center } from "@chakra-ui/react";

import { FormLabel } from "@chakra-ui/react";

function Submitted() {
  const navigate = useNavigate();

  return (
    <Flex
      bg="white"
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <Center>
        <FormLabel as="legend" m="1vw" justify="center">
          Review was Submitted
        </FormLabel>
      </Center>

      <Flex justify="center">
        <Button
          m="2vw"
          fontSize="2vh"
          alignContent="left"
          onClick={() => {
            navigate("/customer");
          }}
        >
          Back to Customer Page
        </Button>
      </Flex>
    </Flex>
  );
}

export default Submitted;
