import Footer from "./Footer";
import Header from "./Header";
import CheckoutPage from "./CheckoutPage"

export default function Checkout({ setCards, cards, setIsSubmitted, isSubmitted }) {
  return (
    <>
      <Header />
      <CheckoutPage setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} setCards={setCards} cards={cards} />
      <Footer text="Shop" />
    </>
  );
}
