// import { useState } from "react";
// import type { Icard } from "../../type/cardTypes";
// import SelectedCards from "./SelectedCards";
// import Card from "./Card";
// import { toast } from "react-toastify";

// const AllCards = ({ cards }: { cards: Icard[] }) => {
//   const [stock, setStock] = useState<Icard[]>([]);

//   const handleAddToStock = (card: Icard) => {
//     setStock((previousStock) => [...previousStock, card]);
//     toast.success(`${card.name} add to stack successful ! `);
//   };

//   const handleRemoveFromStock = (id: number) => {
//     setStock(stock.filter((card) => card.id !== id));
//   };

//   const handleRemoveAll = () => {
//     setStock([]);
//   };

//   return (
//     <div>
//       <div>
//         <main className="container mx-auto my-10">
//           <div>
//             <h1 className="flex gap-1 text-4xl font-bold">
//               <p>Explore the</p>
//               <p className="bg-linear-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
//                 Technologies
//               </p>
//             </h1>
//             <p>Pick one technology per category to build your ideal stack.</p>
//           </div>
//         </main>
//       </div>
//       <div className="container mx-auto flex justify-between gap-1">
//         <div className="container mx-auto my-8 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
//           {cards.map((card: Icard) => {
//             return (
//               <Card
//                 key={card.id}
//                 card={card}
//                 handleAddToStock={handleAddToStock}
//                 stock={stock}
//               />
//             );
//           })}
//         </div>
//         <div>
//           <SelectedCards
//             cards={stock}
//             onRemove={handleRemoveFromStock}
//             onRemoveAll={handleRemoveAll}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCards;
