import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <Switch>
        <Route
          path="/characters"
          render={props => <CharacterList {...props} />}
        />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </main>
  );
}
