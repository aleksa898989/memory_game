export const getCard = (id, cards) => {
  return cards.find((c) => c.id === id);
};
