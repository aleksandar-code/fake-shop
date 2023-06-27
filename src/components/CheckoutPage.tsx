import CheckoutCard from "./CheckoutCard"
import Total from "./Total";
export default function CheckoutPage({ updateCard, cards }) {

  return <>
    <div className="checkout-page">
      <div className="checkout-header" >
        <h4>Shopping</h4>
      </div>
      <div className="checkout-cards">
        {cards.map((card: { id: number, name: string, price: number, img: string, qty: number }) => {
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
          );
        })}
      </div>
      <div className="checkout-cta" >
        <Total cards={cards} />
        <button className="checkout-button"><span>BUY</span><span>NOW</span></button>
      </div>
    </div>
  </>;
}
