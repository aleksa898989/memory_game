import {
  GENERATE_PAIRS,
  TURN_UP_CARD,
  MIX_CARDS,
  CHECK_UNMATCHED_PAIR,
  markPairAsMatched,
  turnPairDown,
  START_GAME,
  mix_cards,
  validateNonMatchingPair,
  validateMatchingPair,
  generatePairs,
  CHECK_MATCHED_PAIR,
} from "redux/actions/actions";

import { getCard, cardImagesAreTheSame } from "helpers/helpers";
import { cardsReducer } from "./cardsReducer";

const initialState = {
  numberOfMoves: 1,
  numberOfPairsFound: 0,
  numClicksWithinTurn: 0,
  firstId: undefined,
  secondId: undefined,
  isGameFinished: false,
  cards: [],
};

function memoryGame(state = initialState, action) {
  switch (action.type) {
    case GENERATE_PAIRS:
      return Object.assign({}, initialState, {
        cards: cardsReducer(initialState.cards, generatePairs(action.pairs)),
      });

    case START_GAME:
      const cards = cardsReducer(
        initialState.cards,
        generatePairs(action.pairs)
      );
      return Object.assign({}, initialState, {
        cards: cardsReducer(cards, mix_cards()),
      });

    case CHECK_UNMATCHED_PAIR:
      if (
        state.numClicksWithinTurn === 2 &&
        !cardImagesAreTheSame(state.firstId, state.secondId, state.cards)
      ) {
        return Object.assign({}, state, {
          numClicksWithinTurn: 0,
          firstId: undefined,
          secondId: undefined,
          numberOfMoves: state.numberOfMoves + 1,
          cards: cardsReducer(
            state.cards,
            turnPairDown(state.firstId, state.secondId)
          ),
        });
      }
      return state;

    case CHECK_MATCHED_PAIR:
      if (
        state.numClicksWithinTurn === 2 &&
        cardImagesAreTheSame(state.firstId, state.secondId, state.cards)
      ) {
        const numberOfPairsFound = state.numberOfPairsFound + 1;
        let isGameFinished = false;
        if (numberOfPairsFound === state.cards.length / 2) {
          isGameFinished = true;
        }
        return Object.assign({}, state, {
          numberOfPairsFound,
          numberOfMoves: state.numberOfMoves + 1,
          numClicksWithinTurn: 0,
          isGameFinished,
          cards: cardsReducer(
            state.cards,
            markPairAsMatched(state.firstId, state.secondId)
          ),
        });
      }
      return state;

    case TURN_UP_CARD:
      const card = getCard(action.id, state.cards);
      if (card.showImage || card.matched) {
        return state;
      }

      if (state.numClicksWithinTurn === 2) {
        const s1 = memoryGame(state, validateMatchingPair());
        const s2 = memoryGame(s1, validateNonMatchingPair());
        return Object.assign(
          {},
          s2,
          { firstId: action.id, numClicksWithinTurn: 1 },
          { cards: cardsReducer(s2.cards, action) }
        );
      }

      let firstId = state.firstId;
      let secondId = state.secondId;
      if (state.numClicksWithinTurn === 0) {
        firstId = action.id;
      } else {
        secondId = action.id;
      }
      const numClicks = state.numClicksWithinTurn + 1;

      return Object.assign({}, state, {
        firstId,
        secondId,
        numClicksWithinTurn: numClicks,
        cards: cardsReducer(state.cards, action),
      });

    case MIX_CARDS:
      return Object.assign({}, state, {
        cards: cardsReducer(state.cards, action),
      });

    default:
      return state;
  }
}

export default memoryGame;
