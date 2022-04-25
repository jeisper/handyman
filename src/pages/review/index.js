import { Flex } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import newbg from "../../Assets/images/new_bg.jpeg";
import ReviewData from "./ReviewData";
import Submitted from "./Submitted";

function Review() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User signed in with id: ", user.uid);
      } else {
        console.log("User is not signed in ");
      }
    });
  }, []);

  let currentContent = <Flex>Loading</Flex>;

  const goNext = () => {
    setCurrentStep(currentStep + 1);
  };

  switch (currentStep) {
    case 0:
      currentContent = <ReviewData goNext={goNext} />;
      break;

    case 1:
      currentContent = <Submitted />;
      break;

    default:
      break;
  }

  return (
    <Flex w="100%" flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        minH="100vh"
        flexWrap="wrap"
        flexDir="column"
        bgImage={newbg}
        bgRepeat="no-repeat"
        bgSize="100%"
      >
        <Flex w="100%" justify="center">
        {currentContent}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Review;
