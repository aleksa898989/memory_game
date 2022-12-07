import { useSelector } from "react-redux";
import Card from "./Card/Card";
import Status from "./Status/Status";

const Game = () => {
  const cards = useSelector((state) => state?.cards);
  return (
    <div className="game-wrapper">
      <div>
        <Status />
      </div>
      <div className="card-wrapper">
        {cards?.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            showImage={card.showImage}
            matched={card.matched}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
