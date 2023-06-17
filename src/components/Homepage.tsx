import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

export function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Footer text="Shop now" />
    </>
  );
}
