import { Button, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import handyman from "../../Assets/images/handyman.png";
import customer from "../../Assets/images/customer.png";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";

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
          bgColor="blue.500"
          align="center"
          justify="center"
          h="150vh"
        >
          <Flex flexDir="column" m="10vh">
            <Heading align="center" fontSize="5xl">
              Easy HandyMan
            </Heading>
            <Flex flexWrap="wrap">
              <Heading align="center" marginTop="1vh">
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
                <Flex flexDir="column" marginLeft="40vh" marginTop="20vh">
                  <Heading fontSize="3xl">Find your HandyMan!</Heading>
                  <Button
                    bg="yellow"
                    w="10vw"
                    h="5vh"
                    mx="8vh"
                    my="2vh"
                    color="black"
                    fontSize="1xl"
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
                  <Heading fontSize="3xl">Become your Own BOSS</Heading>
                  <Button
                    bg="yellow"
                    w="10vw"
                    h="5vh"
                    my="2vh"
                    color="black"
                    mx="8vh"
                    fontSize="1xl"
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
      <Footer />
    </Flex>
  );
}

export default Landing;
