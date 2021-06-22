export const createSetOfCards = (pairs) => {
  const cards = [];
  let id = 1;
  for (let i = 1; i <= pairs; i++) {
    const card1 = {
      id: id,
      image: i,
      showImage: false,
      matched: false,
    };
    id++;
    const card2 = {
      id: id,
      image: i,
      showImage: false,
      matched: false,
    };
    cards.push(card1);
    cards.push(card2);
    id++;
  }

  return cards;
};
