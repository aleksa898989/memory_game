export const TURN_UP_CARD = "TURN_UP_CARD";
export const MIX_CARDS = "MIX_CARDS";
export const CHECK_UNMATCHED_PAIR = "CHECK_UNMATCHED_PAIR";
export const CHECK_MATCHED_PAIR = "CHECK_MATCHED_PAIR";
export const MARK_PAIR_AS_MATCHED = "MARK_PAIR_AS_MATCHED";
export const TURN_PAIR_DOWN = "TURN_PAIR_DOWN";
export const START_GAME = "START_GAME";
export const GENERATE_PAIRS = "GENERATE_PAIRS";
export const SHOW_NUM_CARDS_SELECTION = "SHOW_NUM_CARDS_SELECTION";

export const showNumCardsSelection = () => {
  return { type: SHOW_NUM_CARDS_SELECTION };
};

export const generatePairs = (pairs) => {
  return { type: GENERATE_PAIRS, pairs };
};

export const startGame = (pairs) => {
  return { type: START_GAME, pairs };
};

export const turnPairDown = (id1, id2) => {
  return { type: TURN_PAIR_DOWN, id1, id2 };
};
export const markPairAsMatched = (id1, id2) => {
  return { type: MARK_PAIR_AS_MATCHED, id1, id2 };
};

export const validateNonMatchingPair = () => {
  return { type: CHECK_UNMATCHED_PAIR };
};

export const validateMatchingPair = () => {
  return { type: CHECK_MATCHED_PAIR };
};

export const turnCardUp = (id) => {
  return { type: TURN_UP_CARD, id };
};

export const mix_cards = () => {
  return { type: MIX_CARDS };
};
