import {
  ModalHeader,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormTextInput from "./FormTextInput";

function SkillsModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentSkill, setCurrentSkill] = useState({
    title: "",
    desc: "",
  });

  const checkValidInput = () => {
    if (currentSkill.title === "" || currentSkill.desc === "") {
      alert("Please Insert all Data Where Required");
      return false;
    }

    return true;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Skills</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Skill Title"
              placeholder="Title"
              value={currentSkill ? currentSkill.title : ""}
              onChange={(text) => {
                const copy = { ...currentSkill };
                copy.title = text;
                setCurrentSkill(copy);
              }}
            />
          </Flex>
          <Flex justify="center" direction="row">
            <FormTextInput
              label="Years of Experience"
              placeholder="Years of Experience"
              value={currentSkill ? currentSkill.desc : ""}
              onChange={(text) => {
                const copy = { ...currentSkill };
                copy.desc = text;
                setCurrentSkill(copy);
              }}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Spacer />
          <Button
            onClick={() => {
              if (checkValidInput()) {
                const copy = { ...formData };
                console.log("copy", copy);
                const arr = [...copy.skills];
                arr.push(currentSkill);
                copy.skills = arr;
                updateFormData(copy);
                onClose();
              }
              console.log(currentSkill);
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SkillsModel;
