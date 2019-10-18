import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default function App() {
  return (
    <main>
      <Header />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </Nav>
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
