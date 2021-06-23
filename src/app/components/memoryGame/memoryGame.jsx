import Game from "app/components/memoryGame/game";
const MemoryGame = (props) => {
  
  return (
    <>
      <div>
        <h1>Memory game</h1>
        <Game {...props}/>
      </div>
    </>
  );
};

export default MemoryGame;
