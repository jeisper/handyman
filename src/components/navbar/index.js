import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import SignIn from "../signin";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="15vh"
      flexWrap="wrap"
      align="center"
      justify="center"
      bgColor="pink"
    >
      <Image
        src={logo}
        alt="logo"
        ml="3vh"
        h="15vh"
        onClick={() => {
          navigate("/");
        }}
      />
      <Spacer />
      <Flex>
        <Heading>Your HandyMan</Heading>
      </Flex>
      <Spacer />
      <Flex mr="10vh">
        <SignIn />
      </Flex>
    </Flex>
  );
}

export default NavBar;
