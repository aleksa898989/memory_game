import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Status = () => {
  let state = useSelector((state) => state);
  let isGameFinished = state?.isGameFinished;
  let numberOfMoves = state?.numberOfMoves;
  let numberOfPairsFound = state?.numberOfPairsFound;

  let location = useLocation();
  const setUserAndScoreToLocalStorage = () => {
    let selectedUser = location?.state?.selectedUser;
    let userAndScore = [selectedUser, numberOfMoves];
    let existing = localStorage.getItem("scoreBoard");
    existing = existing ? existing.split(",") : [];
    existing.push(userAndScore);
    localStorage.setItem("scoreBoard", existing.toString());
  };

  if (isGameFinished) {
    setUserAndScoreToLocalStorage();
  }

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <h3>
          Number of moves: {numberOfMoves} Pairs found: {numberOfPairsFound}
        </h3>
        {isGameFinished ? (
          <>
            <h1>WOHOOO!!</h1>
            <Link to={"/score-board"}>
              <h2>Hall of fame</h2>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Status;
