import { Link } from "react-router-dom";

const ScoreBoard = () => {
  let score = JSON.parse(window.localStorage.getItem("score"));
  return (
    <>
      <div>
        <h1>Score board</h1>
        <th>USER: </th>
        <th>SCORE: </th>
        <tr>
          <td>{score.user}</td>
          <td>{score.score}</td>
        </tr>
        <Link to={"/"}> Play again!</Link>
      </div>
    </>
  );
};

export default ScoreBoard;
