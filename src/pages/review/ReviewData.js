import { Button, Flex ,  Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import RatingStar from "../../components/rating";
import { FormControl, FormLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


function ReviewData({ goNext }) {
  const navigate = useNavigate();

  const [handymanRating, setHandymanRating] = useState(0);


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

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Overall</FormLabel>
          <RatingStar />
        </FormControl>
      </VStack>
      
      

      <Flex justify="center">
      <Button
          m="2vw"
          fontSize="2vh"
          alignContent="left"
          onClick={() => {
            navigate("/customer");
          }}
        >
          Cancel
        </Button>
        <Spacer />

      <Button
          m="2vw"
          fontSize="2vh"
          onClick={() => {
            goNext();
          }}
        >
          Send Review
        </Button>
      </Flex>
    </Flex>
  );
}

export default ReviewData;
