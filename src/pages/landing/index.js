import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import bg from "../../Assets/images/handyback2.jpg";

function Landing() {
  const navigate = useNavigate();

  return (
    <Flex w="100%" flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        minH="100vh"
        flexWrap="wrap"
        flexDir="column"
        bgImage={bg}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex mt="20vh">
          <Flex w="100%" h="100%">
            <Flex w="50%" h="50%" flexDir="column" color="white">
              <Flex flexDir="column" ml="10vw">
                <Heading fontSize="5xl">Easy Handyman</Heading>
                <Text fontSize="2xl">A handyman`s best pal</Text>
              </Flex>
              <Spacer />
              <Flex flexDir="column">
                <Text
                  flexWrap="wrap"
                  ml="10vw"
                  mr="15vw"
                  fontSize="2xl"
                  mt="15vh"
                >
                  Are you a handyman looking to advertise your services?
                </Text>
                <Button
                  bg="blue.500"
                  w="10vw"
                  h="5vh"
                  mx="8vh"
                  ml="15vw"
                  color="black"
                  fontSize="1xl"
                  onClick={() => {
                    navigate("/form");
                  }}
                >
                  Sign up
                </Button>
              </Flex>
            </Flex>
            <Spacer />
            <Flex w="50%" h="50%" flexDir="column" color="white" fontSize="1xl">
              <Flex
                flexDir="column"
                m="2"
                flexWrap="wrap"
                ml="10vw"
                mr="10vw"
                fontSize="2xl"
              >
                <Flex marginBottom="7vh">
                  Is your home in need of maintanance? Repairs? If so, Easy
                  Handyman is the platform for you. This platorm connects
                  customers to reliable and skilled handymen in your area.
                </Flex>
                <Flex marginBottom="7vh">
                  No more having to ask around for recommendations, Easy
                  Handyman does it all for you.
                </Flex>
                <Flex>
                  <Flex
                    color="blue.500"
                    mr="1vw"
                    onClick={() => {
                      navigate("/customer");
                    }}
                  >
                    Start browsing
                  </Flex>
                  <Flex> handyman services now </Flex>
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
