import { Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <Flex w="100%" flexDir="column" bgColor="red">
      <NavBar />
      <Flex w="100%" h="70vh" flexWrap="wrap">
        Landing
      </Flex>
    </Flex>
  );
}

export default Landing;
