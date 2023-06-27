import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shopping from "./components/Shopping";
import Checkout from "./components/Checkout";
import { useState } from "react";

export default function App() {
  const [cards, setCards] = useState([
    { id: 0, name: "pullover", price: 65, img: "src/imgs/pullover.png", qty: 0, cart: false },
    { id: 1, name: "jeans", price: 69, img: "src/imgs/jeans.png", qty: 0, cart: false },
    { id: 2, name: "jean", price: 25, img: "src/imgs/jean.png", qty: 0, cart: false },
    { id: 3, name: "jeans2", price: 105, img: "src/imgs/jeans2.png", qty: 0, cart: false },
    { id: 4, name: "gloves", price: 45, img: "src/imgs/gloves.png", qty: 0, cart: false },
    { id: 5, name: "socks", price: 20, img: "src/imgs/socks.png", qty: 0, cart: false },
  ]
  )

  const [itemNumber, setItemNumber] = useState(0)

  function updateCard(newCard: { id: number, name: string, price: number, img: string, qty: number, cart: boolean }) {
    const updateCards = cards.map((card) => {
      if (card.id == newCard.id) {
        return { ...card, qty: newCard.qty }
      }
      return card
    })

    if (newCard.cart == true) {
      setItemNumber(itemNumber + 1)
    } else if (newCard.cart === false && itemNumber !== 0) {
      setItemNumber(itemNumber - 1)
    }

    setCards(updateCards)
  }

  return (
    <>
      <BrowserRouter basename="fake-shop">
        <Routes>
          <Route
            path="/"
            element={<Homepage itemNumber={itemNumber} />}
          />
          <Route
            path="/shopping"
            element={<Shopping itemNumber={itemNumber} setItemNumber={setItemNumber} updateCard={updateCard} cards={cards} />}
          />
          <Route
            path="/checkout"
            element={<Checkout itemNumber={itemNumber} updateCard={updateCard} cards={cards} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
