import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  min-width: 30%;
  margin: 20px;
  padding: 10px;
  background-color: #a6eee6ff;
`;

export default function CharacterCard(props) {
  return (
    <StyledCard>
      <p>Name: {props.character.name}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
      <p>Location: {props.character.location.name}</p>
      <p>Status: {props.character.status}</p>
    </StyledCard>
  );
}
