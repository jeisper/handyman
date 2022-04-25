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
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

function CardModal({ data, isOpen, onClose }) {
  const navigate = useNavigate();
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
              Summary: {data.data.summary}
            </Flex>
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Review Rating:
              {
                <ReactStars
                  value={
                    data.data.review && data.data.review.overall
                      ? data.data.review.overall
                      : 0
                  }
                  size={20}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#blue.900"
                />
              }
            </Flex>
            <Flex my="3" pl="3" borderRadius="10" border="1px">
              Review Description:{" "}
              {data.data.review && data.data.review.feedback
                ? data.data.review.feedback
                : "No Review"}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="blue.300"
            onClick={() => {
              navigate("/review/" + data.data.id);
            }}
          >
            Review
          </Button>
          <Spacer />
          <Button bg="blue.300">Contact</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CardModal;
