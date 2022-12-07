import { Switch, Route } from "react-router-dom";
import Landing from "components/Landing/Landing";
import Game from "components/Game/Game";
import ScoreBoard from "components/ScoreBoard/ScoreBoard";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/memory-game" exact component={Game} />
      <Route path="/score-board" exact component={ScoreBoard} />
    </Switch>
  );
};

export default Pages;
