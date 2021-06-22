import { Redirect, useLocation } from "react-router";

const GameStatusView = ({
  isGameFinished,
  numberOfMoves,
  numberOfPairsFound,
}) => {
  let location = useLocation();
  const setUserAndScoreToLocalStorage = () => {
    let userAndScore = {
      user: location?.state?.selectedUser,
      score: numberOfMoves,
    };

    window.localStorage.setItem("score", JSON.stringify(userAndScore));
  };
  if (isGameFinished) {
    setUserAndScoreToLocalStorage();
    return <Redirect to={"/score-board"} />;
  }
  return (
    <>
      <div>
        Turn: {numberOfMoves} Pairs found: {numberOfPairsFound}
      </div>
    </>
  );
};

export default GameStatusView;
