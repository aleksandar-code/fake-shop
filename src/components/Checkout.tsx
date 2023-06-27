import Footer from "./Footer";
import Header from "./Header";
import CheckoutPage from "./CheckoutPage"

export default function Checkout({ updateCard, cards }) {
  return (
    <>
      <Header />
      <CheckoutPage updateCard={updateCard} cards={cards} />
      <Footer text="Shop" />
    </>
  );
}
