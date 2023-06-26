import Card from "./Card";

export default function Cards({ setCards, cards }) {
  setCards(cards)
  return (
    <>
      <div className="shopping-cards">

        {cards.map((card: { id: number, name: string, price: number, img: string, qty: number }) => {
          return (
            <Card
              key={card.id}
              price={card.price}
              img={card.img}
            />
          );
        })}
      </div>
    </>
  );
}
