import {
  GENERATE_PAIRS,
  TURN_UP_CARD,
  MIX_CARDS,
  MARK_PAIR_AS_MATCHED,
  TURN_PAIR_DOWN,
} from "redux/actions/actions";
import shuffle from "shuffle-array";
import { createSetOfCards } from "helpers/helpers";

export function cardsReducer(state = [], action) {
  switch (action.type) {
    case TURN_UP_CARD:
      return state.map((card) => {
        if (action.id === card.id) {
          return Object.assign({}, card, {
            showImage: true,
          });
        }
        return card;
      });

    case MARK_PAIR_AS_MATCHED:
      return state.map((card) => {
        if (action.id1 === card.id || action.id2 === card.id) {
          return Object.assign({}, card, {
            matched: true,
          });
        }
        return card;
      });

    case TURN_PAIR_DOWN:
      return state.map((card) => {
        if (action.id1 === card.id || action.id2 === card.id) {
          return Object.assign({}, card, {
            showImage: false,
          });
        }
        return card;
      });

    case GENERATE_PAIRS:
      return createSetOfCards(action.pairs);

    case MIX_CARDS:
      let newCards = [...state];
      newCards = shuffle(newCards);
      return newCards;

    default:
      return state;
  }
}
