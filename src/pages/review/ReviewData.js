import { Button, Flex, Spacer, Textarea, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { StackDivider } from "@chakra-ui/react";
import RatingStar from "../../components/rating";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore/lite";

import RatingStarOverall from "../../components/rating/indexOverall";

const feedback = {
  review: {
    feedback: "",
    overall: 0,
  },
};

function ReviewData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [handymanFeedback, setHandymanFeedback] = useState(feedback);

  console.log("Feedback text", handymanFeedback);

  const updateReview = async () => {
    try {
      const handymanRef = doc(db, "handyman-collection", id + "");
      await updateDoc(handymanRef, handymanFeedback);
      toast({
        title: 'Review Submitted.',
        description: "Review was successfully recorded",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
        } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/customer");
  };

  return (
    <Flex
      bg="white"
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Cost : </FormLabel>
          <RatingStar />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Reliability : </FormLabel>
          <RatingStar />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Performance : </FormLabel>
          <RatingStar />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">Overall : </FormLabel>
          <RatingStarOverall
            updateRating={setHandymanFeedback}
            feedbackData={handymanFeedback}
          />
        </FormControl>

        <FormControl as="fieldset" m="1vw">
          <FormLabel as="legend">FeedBack : </FormLabel>
          <Textarea
            h="32vh"
            placeholder="FeedBack"
            value={
              handymanFeedback && handymanFeedback.review
                ? handymanFeedback.review.feedback
                : ""
            }
            onChange={(e) => {
              const copy = { ...handymanFeedback };
              copy.review.feedback = e.target.value;
              setHandymanFeedback(copy);
            }}
          />
        </FormControl>
      </VStack>

      <Flex justify="center">
        <Button
          m="2vw"
          fontSize="2vh"
          bg="blue.400"
          alignContent="left"
          onClick={() => {
            navigate("/customer");
          }}
        >
          Cancel
        </Button>
        <Spacer />

        <Button
          m="2vw"
          bg="blue.400"
          fontSize="2vh"
          onClick={() => {
            updateReview();
          }}
        >
          Send Review
        </Button>
      </Flex>
    </Flex>
  );
}

export default ReviewData;
