import { use } from "react";
import type { Icard } from "../../type/cardTypes";
import AllCards from "./AllCards";

interface CardProps {
  cardsPromise: Promise<Icard[]>;
}
const Cards = ({ cardsPromise }: CardProps) => {
  const cards = use(cardsPromise);

  return (
    <div>


      <AllCards cards={cards} />
    </div>
  );
};

export default Cards;
