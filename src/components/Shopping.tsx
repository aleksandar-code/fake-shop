import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

export default function Shopping({ cards }) {
  return (
    <>
      <Header />
      <Cards cards={cards} />
      <Footer text="Checkout" />
    </>
  );
}
