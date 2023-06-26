import { useEffect } from "react"

export default function CheckoutCard({ setIsSubmitted, isSubmitted, setCards, card, cards, name, price, img, qty }) {



  const toggleIsSubmitted = () => {
    setIsSubmitted(value => !value);
  };

  useEffect(() => {
    if (isSubmitted === true) {
      // navigation.navigate("/homepage");
      console.log(card)
    }
  }, [isSubmitted]);


  return <>
    <div className="checkout-card">
      <p>{name}</p>
      <img src={img}></img>
      <p>{price}</p>
      <div className="user-interaction">
        <h6>Quantity:</h6>
        <input type="number" value={qty} onChange={(e) => {
          const newCard = { id: card.id, name: name, price: price, img: img, qty: e.target.value }
          toggleIsSubmitted()
        }}></input>
      </div>
    </div>
  </>
}
