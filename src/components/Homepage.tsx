import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function Homepage({ itemNumber }) {
  return (
    <>
      <Header itemNumber={itemNumber} />
      <Hero />
      <Footer text="Shop now" />
    </>
  );
}
