import { Flex } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

function RatingStarOverall({ updateRating, feedbackData }) {
  console.log("the feedbackData is:", feedbackData);

  return (
    <Flex>
      <ReactStars
        count={5}
        onChange={(text) => {
          const copy = { ...feedbackData };
          copy.review.overall = text;
          updateRating(copy);
        }}
        size={35}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </Flex>
  );
}

export default RatingStarOverall;
