import Footer from "./Footer";
import Header from "./Header";
import CheckoutPage from "./CheckoutPage"

export default function Checkout({ itemNumber, updateCard, cards }) {
  return (
    <>
      <Header itemNumber={itemNumber} />
      <CheckoutPage updateCard={updateCard} cards={cards} />
      <Footer text="Shop" />
    </>
  );
}
