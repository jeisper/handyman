import { Button, Flex, Image } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SignIn() {
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
          mx="15px"
          justify="center"
          align="center"
          flexWrap="wrap"
          justifyContent="center"
          onClick={() => {
            nagivate("/profile");
          }}
        >
          <Image
            w="60px"
            h="60px"
            borderRadius="50%"
            src={currentUser.photoURL}
          />
        </Flex>
      ) : (
        <Button
          leftIcon={<IoPerson />}
          color="black"
          bgColor="blue.500"
          p="5"
          onClick={signInUser}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}

export default SignIn;
