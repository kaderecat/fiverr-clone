import { PropsWithChildren } from "react";
import Slider from "infinite-react-carousel";

interface SliderProps extends PropsWithChildren {
  slidesToShow: number;
  arrowsScroll: number;
}

const Slide = ({ children, slidesToShow, arrowsScroll }: SliderProps) => {
  return (
    <div className="flex justify-center items-center py-[100px]">
      <div className="w-[1200px] ">
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
