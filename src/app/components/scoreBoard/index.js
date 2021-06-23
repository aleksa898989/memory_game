import { Link } from "react-router-dom";

const ScoreBoard = () => {
  let score = localStorage.getItem("scoreBoard")?.split(",");
  let final = [];
  score?.forEach((x, index) => {
    final.push({
      item: x,
      index: index,
    });
  });

  return (
    <>
      <div className="score-board-wrapper">
        <h1>Score board</h1>
        {final.map((item) => {
          return <p>{item.item}</p>;
        })}
        <Link to={"/"}>
          <h1>Play again</h1>
        </Link>
      </div>
    </>
  );
};

export default ScoreBoard;
