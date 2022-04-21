import { Flex } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

function RatingStar() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Flex>
      <ReactStars
        count={5}
        onChange={ratingChanged}
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

export default RatingStar;
