import CheckoutCard from "./CheckoutCard"
export default function CheckoutPage({ setCards, cards }) {

  setCards(cards)
  return <>
    <div className="checkout-page">
      <h4>Shopping</h4>
      <div className="checkout-cards">
        {cards.map((card: { id: number, name: string, price: number, img: string, qty: number }) => {
          return (
            <CheckoutCard
              key={card.id}
              price={card.price}
              img={card.img}
              name={card.name}
              qty={card.qty}
              setCards={setCards}
              cards={cards}
              card={card}
            />
          );
        })}
      </div>

    </div>
  </>;
}
