import { Switch, Route } from "react-router-dom";
import Landing from "app/components/landing";
import MemoryGame from "app/components/memoryGame";
import ScoreBoard from "app/components/scoreBoard";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/memory-game" exact component={MemoryGame} />
        <Route path="/score-board" exact component={ScoreBoard} />
      </Switch>
    </>
  );
};

export default Pages;
