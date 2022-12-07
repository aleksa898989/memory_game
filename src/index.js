import { render } from "react-dom";
import "main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
