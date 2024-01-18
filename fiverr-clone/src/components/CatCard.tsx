import React from "react";
import { Card as CardModel } from "../types/Card";

interface CardProps {
  cards: CardModel;
}

const CatCard = ({ cards }: CardProps) => {
  return (
    <div className="w-[252px] h-[344px] rounded-md text-white">
      <div className="relative">
        <img className="object-cover" src={cards.img} alt="" />
        <div className="absolute top-0 flex flex-col p-4">
          <span >{cards.desc}</span>
          <span className="font-bold">{cards.title}</span>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
