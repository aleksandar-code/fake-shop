import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

export default function Shopping({ itemNumber, setItemNumber, updateCard, cards }) {
  return (
    <>
      <Header itemNumber={itemNumber} />
      <Cards updateCard={updateCard} itemNumber={itemNumber} cards={cards} setItemNumber={setItemNumber} />
      <Footer text="Checkout" />
    </>
  );
}
