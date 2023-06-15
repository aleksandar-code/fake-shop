import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Shopping } from "./components/Shopping";
import { Product } from "./components/Product";
import { Checkout } from "./components/Checkout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/fake-shop"
            element={<Homepage />}
          ></Route>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/shopping"
            element={<Shopping />}
          />
          <Route
            path="/product"
            element={<Product />}
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
