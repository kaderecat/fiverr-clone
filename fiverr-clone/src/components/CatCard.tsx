import { Link } from "react-router-dom";
import { Card as CardModel } from "../types/Card";

interface CardProps {
  cards: CardModel,
  
}

const CatCard = ({ cards }: CardProps) => {
  return (
    <Link to={'/gigs'}>
      <div className="w-[252px] h-[344px] rounded-md text-white">
        <div className="relative h-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={cards.img}
            alt=""
          />
          <div className="absolute top-0 flex flex-col p-4">
            <span>{cards.desc}</span>
            <span className="font-bold">{cards.title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
