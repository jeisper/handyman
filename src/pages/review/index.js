import { Flex } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import bg from "../../Assets/images/handyback2.jpg";
import ReviewData from "./ReviewData";
import Footer from "../../components/footer";

function Review() {
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

  return (
    <Flex w="100%" flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        minH="100vh"
        flexWrap="wrap"
        flexDir="column"
        bgImage={bg}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex w="100%" justify="center" mt="5">
          <ReviewData />;
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Review;
