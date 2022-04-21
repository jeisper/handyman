import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import RatingStar from "../../components/rating";

import {
  FormControl,
  FormLabel,

} from "@chakra-ui/react";

function ProfileData({ formData, updateFormData, goBack, goNext }) {

  console.log(formData);
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
        <Textarea
          w="95%"
          mb="10"
          m="1vw"
          label="Feedback Comment"
          placeholder="Feedback Comment"
          value={formData && formData.contact ? formData.contact.email : ""}
        />
      </VStack>

      <Flex justify="center">
        <Button
          m="2vw"
          fontSize="2vh"
          alignContent="left"
          onClick={() => {
            navigate("/profile");  
          }}
        >
          Cancel
        </Button>
        <Spacer />

        <Button
          m="2vw"
          fontSize="2vh"
          onClick={() => {
            // if (checkValidInput()) {
            goNext();
            // }
          }}
        >
          Send Review
        </Button>

      </Flex>
    </Flex>
  );
}

export default ProfileData;
