import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Spacer,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { TiArrowLeftOutline } from "react-icons/ti";

function Summary({ formData, updateFormData, saveChange, goBack }) {
  const toast = useToast();
  const checkValidInput = () => {
    if (formData.summary === "") {
      alert("Insert Some Data to Proceed");
      return false;
    }

    return true;
  };
  return (
    <Flex
      bg="white"
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      border="1px solid"
      borderRadius="10px"
    >
      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Summary</FormLabel>
        <Textarea
          h="62vh"
          placeholder="Summary"
          value={formData && formData.summary ? formData.summary : ""}
          onChange={(e) => {
            const copy = { ...formData };
            copy.summary = e.target.value;
            updateFormData(copy);
          }}
        />
      </FormControl>

      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" onClick={goBack} bg="blue.400">
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button
          m="2vw"
          fontSize="3vh"
          bg="blue.400"
          alignContent="left"
          onClick={() => {
            if (checkValidInput()) {
              saveChange();
              toast({
                title: "Profile Created.",
                description: "Profile was successfully created.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

export default Summary;
