import Card from "./card";
import GameStatusView from "./status";

const Game = (props) => {
  return (
    <div className="game-wrapper">
      <div>
        <GameStatusView
          isGameFinished={props.isGameFinished}
          numberOfMoves={props.numberOfMoves}
          numberOfPairsFound={props.numberOfPairsFound}
          onShowNumCardsSelection={props.onShowNumCardsSelection}
        />
      </div>
      <div className="card-wrapper">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            showImage={card.showImage}
            matched={card.matched}
            onClick={props.onCardClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
