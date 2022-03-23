import {
  Button,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SignIn() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
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

        // onClose();
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
          <Image w="50" h="50" borderRadius="50%" src={currentUser.photoURL} />
        </Flex>
      ) : (
        <>
          <Button
            leftIcon={<IoPerson />}
            color="white"
            bgColor="blue"
            p="5"
            onClick={signInUser}
          >
            Sign In
          </Button>
          {/* <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
              <ModalContent>
                <ModalHeader>Easy HandyMan</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  To start working, signIn using your google account.
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="ghost"
                    leftIcon={<FcGoogle />}
                    onClick={signInUser}
                  >
                    Sign In
                  </Button>
                </ModalFooter>
              </ModalContent>
            </ModalOverlay>
          </Modal> */}
        </>
      )}
    </Flex>
  );
}

export default SignIn;
