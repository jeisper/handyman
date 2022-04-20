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

function CardModal({ data, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="orange.200">
        <ModalHeader>
          <Flex justifyContent="center">
            {data.data.name.fname + " " + data.data.name.lname}
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Name: {data.data.name.fname + " " + data.data.name.lname}
            </Flex>
            <Flex direction="row" my="3" pl="3" borderRadius="10" border="1px">
              <Flex>Category: {data.data.skills[0].title}</Flex>
              <Spacer />
              <Flex pr="3">
                Years of Experience: {data.data.skills[0].desc}
              </Flex>
            </Flex>
            <Flex direction="row" my="3" pl="3" borderRadius="10" border="1px">
              <Flex>City: {data.data.location.city}</Flex>
              <Spacer />
              <Flex>Area: {data.data.location.area}</Flex>
              <Spacer />
              <Flex pr="3">Phone: {data.data.contact.phone}</Flex>
            </Flex>
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Email: {data.data.contact.email}
            </Flex>
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Review Rating:{" "}
            </Flex>
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Summary: {data.data.summary}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button bg="blue.300">Make Review</Button>
          <Spacer />
          <Button bg="blue.300">Contact</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CardModal;
