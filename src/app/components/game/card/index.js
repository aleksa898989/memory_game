import { useDispatch, useSelector } from "react-redux";
import {
  turnCardUp,
  validateNonMatchingPair,
  validateMatchingPair,
} from "app/redux/actions/actions";

const Card = ({ id, image, showImage, matched }) => {
  const dispatch = useDispatch();
  let timeOut = null;
  const handleClick = (id) => {
    clearInterval(timeOut);
    dispatch(turnCardUp(id));
    dispatch(validateMatchingPair());
    setTimeout(() => {
      dispatch(validateNonMatchingPair());
    }, 4000);
  };
  let numClicksWithinTurn = useSelector((state) => state.numClicksWithinTurn);
  const imageSource = `${window.location.origin}/images/${image}.jpg`;
  const backPath = `${window.location.origin}/images/back_of_the_card.jpg`;

  let className = "card flip-card";
  if (matched) {
    className = className + " matched";
  }
  const classNameWithAnimation = className + " animate";

  return (
    <div
      onClick={() => {
        if (!matched && !showImage && numClicksWithinTurn !== 2) {
          handleClick(id);
        }
      }}
      className={showImage ? classNameWithAnimation : className}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={`${backPath}`} draggable="false" alt="" />
        </div>
        <div className="flip-card-back">
          <img src={`${imageSource}`} draggable="false" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
