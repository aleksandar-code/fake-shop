export default function CheckoutCard({ updateCard, card, name, price, img, qty }) {

  return <>
    <div className="checkout-card">
      <p>{name}</p>
      <img src={img}></img>
      <p>{price}</p>
      <div className="user-interaction">
        <h6>Quantity:</h6>
        <input type="number" value={qty} min={0} max={100} onChange={(e) => {
          const newCard = { id: card.id, name: name, price: price, img: img, qty: Number(e.currentTarget.value) }
          updateCard(newCard)
        }}></input>
      </div>
    </div>
  </>
}
