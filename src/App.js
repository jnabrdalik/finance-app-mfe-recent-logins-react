import Login from "./components/Login";
import RecentLoginList from "./components/RecentLoginList";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const token = localStorage.getItem("token");

  return token ? <RecentLoginList /> : <Login />;
}

class FinanceAppMfeAccount extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define(
  "finance-app-mfe-recent-logins-react",
  FinanceAppMfeAccount
);
