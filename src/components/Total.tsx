export default function Total({ cards }) {

  function calculatePrice() {
    let total = 0;
    cards.forEach((card) => {
      if (card.qty !== 0) {
        total += card.qty * card.price
      }
    });
    return total;
  };

  return <><div className="checkout-total">Total: <strong>{calculatePrice()}$</strong></div>
  </>;
}
