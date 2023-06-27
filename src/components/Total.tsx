export default function Total({ cards }) {

  function calculatePrice() {
    let total = 0;
    cards.forEach((card: { id: number, name: string, price: number, img: string, qty: number, cart: boolean }) => {
      if (card.qty !== 0) {
        total += card.qty * card.price
      }
    });
    return total;
  };

  return <><div className="checkout-total">Total: <strong>{calculatePrice()}$</strong></div>
  </>;
}
