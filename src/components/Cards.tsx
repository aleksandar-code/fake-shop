import Card from "./Card";

export default function Cards({ cards }) {

  return (
    <>
      <div className="shopping-cards">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              price={card.price}
              img={card.img}
            />
          );
        })}
      </div>
    </>
  );
}
