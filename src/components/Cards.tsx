import Card from "./Card";

export default function Cards() {
  const cards = [65, 69, 25, 105, 45, 20];
  return (
    <>
      <div className="shopping-cards">
        {cards.map((price, index) => {
          return <Card key={index} price={price} />;
        })}
      </div>
    </>
  );
}
