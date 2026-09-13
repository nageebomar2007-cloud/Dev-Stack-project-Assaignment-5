import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
// import FooterSection from "./components/FooterSection";
// import Cards from "./components/cards/Cards";
// import { Suspense } from "react";
import type { Icard } from "./type/cardTypes";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const cardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const cardsPromise = cardsFetch();

  return (
    <>
      <Nav  />
      <HeroSection />
      {/* <ToastContainer />
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>

      <FooterSection /> */}
    </>
  );
}

export default App;
