import MemoryGame from "./memoryGame";
import { connect } from "react-redux";
import {
  turnCardUp,
  validateNonMatchingPair,
  validateMatchingPair,
  startGame,
  showNumCardsSelection,
} from "../../redux/actions/actions";

let timeOut = null;
const MemoryGameReduxContainer = (props) => {
  return <MemoryGame {...props} />;
};
const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    numberOfMoves: state.numberOfMoves,
    isGameFinished: state.isGameFinished,
    numberOfPairsFound: state.numberOfPairsFound,
    showNumCardsSelection: state.showNumCardsSelection,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCardClicked: (id) => {
      clearInterval(timeOut);
      dispatch(turnCardUp(id));
      dispatch(validateMatchingPair());
      timeOut = setTimeout(() => {
        dispatch(validateNonMatchingPair());
      }, 4000);
    },
    onShowNumCardsSelection: () => {
      dispatch(showNumCardsSelection());
    },
    onstartGame: (pairs) => {
      dispatch(startGame(pairs));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGameReduxContainer);
