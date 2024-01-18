import React from "react";
import Slider from "infinite-react-carousel";
const Slide = ({children , slidesToShow , arrowsScroll}) => {
  return (
    <div>
      <div>
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
