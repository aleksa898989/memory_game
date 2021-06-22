import CardView from "./card";
import GameStatusView from "./status";

const Game = (props) => {
  return (
    <div className="game">
      <header className="game-header">
        <div className="game-title">A Memory game in React with Redux</div>
      </header>
      <div className="game-status">
        <GameStatusView
          isGameFinished={props.isGameFinished}
          numberOfMoves={props.numberOfMoves}
          numberOfPairsFound={props.numberOfPairsFound}
          onShowNumCardsSelection={props.onShowNumCardsSelection}
        />
      </div>
      <div className="card-container">
        {props.cards.map((card) => (
          <CardView
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
