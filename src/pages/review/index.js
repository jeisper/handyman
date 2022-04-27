import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../../components/navbar";
import bg from "../../Assets/images/handyback2.jpg";
import ReviewData from "./ReviewData";
import Footer from "../../components/footer";

function Review() {
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
