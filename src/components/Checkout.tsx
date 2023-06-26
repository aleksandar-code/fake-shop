import Footer from "./Footer";
import Header from "./Header";
import CheckoutPage from "./CheckoutPage"

export default function Checkout({ setCards, cards }) {
  return (
    <>
      <Header />
      <CheckoutPage setCards={setCards} cards={cards} />
      <Footer text="Shop" />
    </>
  );
}
