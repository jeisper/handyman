import { Flex, Image, Select, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../Assets/images/icon.png";
import SignIn from "../signIn";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="13vh"
      flexWrap="wrap"
      align="center"
      justify="center"
      bgColor="black"
      color="white"
      fontSize="2xl"
    >
      <Flex flexDir="column" ml="2vw">
        <Flex flexDir="row">
          <Text>Easy</Text>
          <Image
            src={icon}
            alt="logo"
            mt="1vh"
            ml="2vh"
            h="5vh"
            w="3vw"
            onClick={() => {
              navigate("/");
            }}
          />
        </Flex>
        <Text marginTop="0.5vh">HandyMan</Text>
      </Flex>
      <Spacer />
      <Flex>
        <Flex
          mx="5vw"
          onClick={() => {
            navigate("/customer");
          }}
        >
          <Select placeholder="Browse" variant="outline">
            <option value="">Carpenter</option>
            <option value="">Cleaner</option>
            <option value="">Electrician</option>
            <option value="">Furniture Assembler</option>
            <option value="">Gardener</option>
            <option value="">General Handyman</option>
            <option value="">Painter</option>
            <option value="">Plumber</option>
            <option value="">Removals</option>
            <option value="">Tiler</option>
          </Select>
        </Flex>

        <Flex mx="5vw">
          <Text>About Us</Text>
        </Flex>

        <Flex mx="5vw">
          <Text>Contact Us</Text>
        </Flex>
      </Flex>
      <Flex mr="10vh">
        <SignIn />
      </Flex>
    </Flex>
  );
}

export default NavBar;
