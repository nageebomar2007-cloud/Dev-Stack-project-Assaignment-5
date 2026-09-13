import type { Icard } from "../../type/cardTypes";

interface SelectedCardsProps {
  cards: Icard[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}
const SelectedCards = ({
  cards,
  onRemove,
  onRemoveAll,
}: SelectedCardsProps) => {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 h-auto w-60 ">
      <h2 className="mb-4 text-2xl font-bold text-gray-700">Your Stack</h2>
      {cards.length === 0 ? (
        <div className="grid justify-between gap-10">
          <p>No technologies selected yet.</p>
          <p className="border border-gray-300 h-30 ">Your stack is empty.</p>
        </div>
      ) : (
        <div>
          <div>{cards.length}Technology Selected</div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between rounded-xl border border-gray-300 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 object-contain"
                  src={card.icon}
                  alt={card.name}
                />
                <div>
                  <h3 className="font-semibold text-gray-700">{card.name}</h3>
                  <p className="text-sm text-gray-500">{card.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(card.id)}
                className="text-gray-500 hover:text-red-500"
                title={`Remove ${card.name}`}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedCards;
