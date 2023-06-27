import CheckoutCard from "./CheckoutCard"

export default function CheckoutCards({ cards, updateCard }) {
  return <>
    <div className="checkout-cards">
      {cards.map((card: { id: number, name: string, price: number, img: string, qty: number, cart: boolean }) => {
        if (card.qty !== 0) {
          return (
            <CheckoutCard
              key={card.id}
              price={card.price}
              img={card.img}
              name={card.name}
              qty={card.qty}
              updateCard={updateCard}
              card={card}
            />
          )
        }
      })}
    </div>
  </>
}
