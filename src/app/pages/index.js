import { Switch, Route } from "react-router-dom";
import Landing from "app/components/landing";
import Game from "app/components/game";
import ScoreBoard from "app/components/scoreBoard";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/memory-game" exact component={Game} />
        <Route path="/score-board" exact component={ScoreBoard} />
      </Switch>
    </>
  );
};

export default Pages;
