import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shopping from "./components/Shopping";
import Checkout from "./components/Checkout";

export default function App() {
  const cards = [
    { price: 65, img: "src/imgs/pullover.png" },
    { price: 69, img: "src/imgs/jeans.png" },
    { price: 25, img: "src/imgs/jean.png" },
    { price: 105, img: "src/imgs/jeans2.png" },
    { price: 45, img: "src/imgs/gloves.png" },
    { price: 20, img: "src/imgs/socks.png" },
  ]

  return (
    <>
      <BrowserRouter basename="fake-shop">
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/shopping"
            element={<Shopping cards={cards} />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
