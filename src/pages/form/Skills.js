import {
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import SkillsModal from "./SkillsModel";
import TextDesign from "./TextDesign";
function Skills({ formData, updateFormData, goBack, goNext }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
      bg="white"
    >
      <Flex flexDir="column" bg="white">
        {formData.skills.length > 0 &&
          formData.skills.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                boxShadow="dark-lg"
                borderRadius="10"
                w="100%"
                my="2"
                key={item.title}
              >
                <Flex>
                  <TextDesign text="Skill Title: " content={item.title} />
                </Flex>
                <Flex>
                  <TextDesign
                    text="Years of Experience: "
                    content={item.desc}
                  />
                </Flex>
              </Flex>
            );
          })}
      </Flex>
      <Button justify="center" w="90%" m="2vw" fontSize="lg" onClick={onOpen}>
        Add Skill
      </Button>
      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" bg="blue.500" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <IconButton placeContent="right" m="2vw" bg="blue.500" onClick={goNext}>
          <TiArrowRightOutline fontSize="35px" />
        </IconButton>
      </Flex>
      <SkillsModal
        formData={formData}
        updateFormData={updateFormData}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Skills;
