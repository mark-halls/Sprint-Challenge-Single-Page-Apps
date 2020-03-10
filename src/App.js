import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <StyledMain>
      <Header />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </Nav>
      <Switch>
        <Route
          path="/characters"
          render={props => <CharacterList {...props} />}
        />
        <Route
          path="/locations"
          render={props => <LocationsList {...props} />}
        />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </StyledMain>
  );
}
