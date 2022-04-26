import {
  Flex,
  Image,
  Select,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../Assets/images/icon.png";
import SignIn from "../signIn";

function NavBar() {
  const navigate = useNavigate();
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  return isOnmobile ? (
    <Flex
      w="100%"
      minH="150px"
      flexWrap="wrap"
      align="center"
      justify="center"
      bgColor="black"
      color="white"
      fontSize="2xl"
    >
      <Flex flexDir="column" ml="20px" justifyContent="center">
        <Flex justify="space-between">
          <Flex>
            <Flex flexDir="column">
              <Flex>
                <Text>Easy</Text>
                <Image
                  src={icon}
                  alt="logo"
                  ml="2"
                  mt="10px"
                  h="30px"
                  w="30px"
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </Flex>

              <Text marginTop="5px" marginLeft="5px">
                HandyMan
              </Text>
            </Flex>
          </Flex>
          <Select
            placeholder="Browse"
            w="120px"
            variant="outline"
            mx="8"
            mt="8"
          >
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
        <Flex flexDir="row">
          <Text mx="15px" my="10px">
            About Us
          </Text>
          <Text mx="15px" my="10px">
            Contact Us
          </Text>
          <SignIn />
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex
      w="100%"
      minH="120px"
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
            h="50px"
            w="50px"
            onClick={() => {
              navigate("/");
            }}
          />
        </Flex>
        <Text marginTop="0.5vh">HandyMan</Text>
      </Flex>
      <Spacer />
      <Flex flexWrap="wrap" justifyContent="center" marginTop="30px">
        <Flex>
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
        <Flex mr="10vh">
          <SignIn />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
