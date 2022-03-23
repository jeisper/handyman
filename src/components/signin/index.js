import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { IoPerson } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState(null);

  const nagivate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
        console.log("User signed in");
      } else {
        console.log("User did not signed in");
        setCurrentUser(null);
      }
    });
  }, []);

  const signInUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);

        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex>
      {currentUser != null ? (
        <Flex
          h="100%"
          justify="center"
          align="center"
          onClick={() => {
            nagivate("/profile");
          }}
        >
          <Image w="50" h="50" borderRadius="full" src={currentUser.photoURL} />
        </Flex>
      ) : (
        <Button leftIcon={<IoPerson />} color="blue.500" p="5" onClick={onOpen}>
          SignIn
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Easy HandyMan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            To start working, signIn using your google account.
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="outline"
              leftIcon={<FcGoogle />}
              onClick={signInUser}
            ></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default SignIn;
