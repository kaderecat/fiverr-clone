import React from "react";
import Featured from "../../components/Featured";
import TrustedBy from "../../components/TrustedBy";
import Slide from "../../components/Slide";
import {cards} from '../../data.js'
import CatCard from "../../components/CatCard";
import { Card } from "../../types/Card.js";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide arrowsScroll={5} slidesToShow={5}>{cards.map((items : Card) => <CatCard cards={items} key={items.id}/>)}</Slide>
    </div>
  );
};

export default Home;
