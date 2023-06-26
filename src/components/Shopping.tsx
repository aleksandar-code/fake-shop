import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

export default function Shopping({ setCards, cards }) {
  return (
    <>
      <Header />
      <Cards setCards={setCards} cards={cards} />
      <Footer text="Checkout" />
    </>
  );
}
