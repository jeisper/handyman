import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import RatingStar from "../../components/rating";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ReviewData() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        console.log("User signed in with id: ", user.uid);
      } else {
        console.log("User is not signed in ");
      }
    });
  }, []);
  // console.log("the user id here is:", currentUser.uid);
  // console.log("the user name here is:", currentUser.displayName);

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
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <FormLabel as="legend" m="1vw">
          {/* <Flex> HandyMan Name: {currentUser.displayName}</Flex> */}
        </FormLabel>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Cost</FormLabel>
          <RatingStar />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Reliability</FormLabel>
          <RatingStar />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Performance</FormLabel>
          <RatingStar />
        </FormControl>
      </VStack>

      <Flex justify="center">
        <Button
          m="2vw"
          fontSize="2vh"
          onClick={() => {
            navigate("/customer");
          }}
        >
          Send Review
        </Button>
      </Flex>
    </Flex>
  );
}

export default ReviewData;
