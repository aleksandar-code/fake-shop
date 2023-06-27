import Card from "./Card";

export default function Cards({ itemNumber, setItemNumber, updateCard, cards }) {
  return (
    <>
      <div className="shopping-cards">

        {cards.map((card: { id: number, name: string, price: number, img: string, qty: number, cart: boolean }) => {
          return (
            <Card
              key={card.id}
              price={card.price}
              img={card.img}
              updateCard={updateCard}
              card={card}
              setItemNumber={setItemNumber}
              itemNumber={itemNumber}
            />
          );
        })}
      </div>
    </>
  );
}
