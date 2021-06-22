import { render } from "react-dom";
import "app/main.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "app/redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
