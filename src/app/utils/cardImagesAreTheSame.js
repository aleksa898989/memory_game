import { getCard } from "./getCard";

export const cardImagesAreTheSame = (id1, id2, cards) => {
  if (getCard(id1, cards).image === getCard(id2, cards).image) {
    return true;
  } else {
    return false;
  }
};
