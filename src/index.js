import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "bulma/css/bulma.css";
import Nav from "./components/nav";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </React.StrictMode>
);
