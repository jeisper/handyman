import { Flex } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";

function RatingStar() {
  const [handymanRating, setHandymanRating] = useState(0);

  const ratingChanged = (newRating) => {
    setHandymanRating(newRating);
  };
  return (
    <Flex>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={35}
        isHalf={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </Flex>
  );
}

export default RatingStar;
