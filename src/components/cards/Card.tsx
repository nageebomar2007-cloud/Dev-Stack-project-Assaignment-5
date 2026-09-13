import type { Icard } from "../../type/cardTypes";
interface CardProps {
  card: Icard;
  handleAddToStock: (card: Icard) => void;
  stock: Icard[];
}
const card = ({ card, handleAddToStock, stock }: CardProps) => {
  const isAdded = stock.some((item) => item.id === card.id);
  return (
    <div
      key={card.id}
      className="w-100 rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between my-3">
        <img className="h-10" src={card.icon} alt="" />
        <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-0.5 text-xl font-medium text-blue-500 ">
          {card.badge}
        </div>
      </div>
      <div className="mt-5 text-xl font-bold text-gray-800 my-4">
        {card.name}
      </div>
      <div className="mt-2 text-sm text-gray-400 my-3">{card.description}</div>
      <div className="flex justify-between items-center my-5">
        <div className="rounded bg-gray-200">{card.category}</div>
        <div className="text-gray-600">{card.difficulty}</div>
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-yellow-500">☆</div> {card.rating}
        </div>
      </div>
      <button
        onClick={() => handleAddToStock(card)}
        disabled={isAdded}
        className={`btn ${isAdded ? "cursor-not-allowed bg-pink-200 text-pink-500" : "cursor-pointer bg-black text-white"}  mt-3 w-full rounded-md`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default card;
