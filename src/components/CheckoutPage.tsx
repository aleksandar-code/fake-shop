import CheckoutCards from "./CheckoutCards";
import Total from "./Total";
export default function CheckoutPage({ updateCard, cards }) {

  return <>
    <div className="checkout-page">
      <div className="checkout-header" >
        <h4>Shopping</h4>
      </div>
      <CheckoutCards cards={cards} updateCard={updateCard} />
      <div className="checkout-cta" >
        <Total cards={cards} />
        <button className="checkout-button"><span>BUY</span><span>NOW</span></button>
      </div>
    </div>
  </>;
}
