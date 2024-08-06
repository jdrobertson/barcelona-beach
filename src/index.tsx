/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router } from "@solidjs/router";
import App from "./App";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={App} />
    </Router>
  ),
  root!
);
