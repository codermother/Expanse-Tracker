import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";

import App from "./App";
import rootReducer from "./store";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
