import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import RatingStar from "../../components/rating";
import { FormControl, FormLabel } from "@chakra-ui/react";

function ReviewData() {
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
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <FormLabel as="legend" m="1vw">
          ID of Handyman
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
