import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const CharacterSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data);
        setCharacterData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  if (!characterData) {
    return <div>Loading...</div>;
  }
  return (
    <CharacterSection className="character-list">
      {characterData.results.map((character, index) => {
        return <CharacterCard character={character} key={index} />;
      })}
    </CharacterSection>
  );
}
