import { BrowserRouter as Router } from "react-router-dom";
import Pages from "app/pages";

const App = () => {
  return (
    <>
      <Router>
        <Pages />
      </Router>
    </>
  );
};

export default App;
