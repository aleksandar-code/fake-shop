import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

export default function Shopping({ updateCard, cards }) {
  return (
    <>
      <Header />
      <Cards updateCard={updateCard} cards={cards} />
      <Footer text="Checkout" />
    </>
  );
}
