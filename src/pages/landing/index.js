import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import handyman from "../../Assets/images/handyman.png";
import customer from "../../Assets/images/customer.png";
import NavBar from "../../components/navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <Flex w="100%" flexDir="column" bgColor="red">
      <NavBar />
      <Flex w="100%" h="100vh" flexWrap="wrap" flexDir="column">
        <Flex
          w="100%"
          flexWrap="wrap"
          flexDir="column"
          bgColor="grey"
          align="center"
          justify="center"
          h="100vh"
        >
          <Flex flexDir="column" m="10vh">
            <Heading align="center">Easy HandyMan</Heading>
            <Flex flexWrap="wrap">
              <Heading align="center">
                The Place where you are your Own Boss or find the correct
                HandyMan for your house
              </Heading>
            </Flex>
          </Flex>
          <Flex flexDir="column">
            {/* <Heading fontSize="7xl">
              Are you a Handyman Looking for Customers?
            </Heading> */}
            <Flex flexDir="row">
              <Image src={handyman} alt="logo" h="30vh" mr="" />
              <Flex flexDir="column">
                <Flex flexDir="column" marginLeft="32vh" marginTop="15vh">
                  <Heading>Find your HandyMan!</Heading>
                  <Button
                    bg="yellow"
                    w="10vw"
                    h="5vh"
                    mx="5vh"
                    color="black"
                    fontSize="7xl"
                    onClick={() => {
                      navigate("/customer");
                    }}
                  >
                    Get Started
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir="column">
              {/* <Heading fontSize="7xl" my="30" marginLeft="30vw">
                Are you a Customer looking for a HandyMan?
              </Heading> */}
              <Flex flexDir="row">
                <Flex flexDir="column" marginRight="25vh">
                  <Heading>Become your Own BOSS</Heading>
                  <Button
                    bg="yellow"
                    w="10vw"
                    h="5vh"
                    color="black"
                    mx="7vh"
                    fontSize="7xl"
                    borderRadius="5%"
                    onClick={() => {
                      navigate("/form");
                    }}
                  >
                    Get Started
                  </Button>
                </Flex>
                <Flex>
                  <Image src={customer} alt="logo" ml="3vh" h="30vh" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;
