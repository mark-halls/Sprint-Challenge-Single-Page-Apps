import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacterData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    characterData && setDataToDisplay(characterData.results);
  }, [characterData]);

  if (!dataToDisplay) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SearchForm
        data={characterData.results}
        setDataToDisplay={setDataToDisplay}
      />
      <CharacterSection className="character-list">
        {dataToDisplay.map((character, index) => {
          return <CharacterCard character={character} key={index} />;
        })}
      </CharacterSection>
    </>
  );
}
